// src/components/PaymentOptions.jsx
import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import upiIcon from "../assets/images/upi.png";
import walletIcon from "../assets/images/wallet.png";
import cardIcon from "../assets/images/card.png";

const PaymentOptions = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Extract state safely
  const {
    type = "single", // default to single flow
    cart = [],
    subtotal = 0,
    ...rest
  } = location.state || {};

  const isCartFlow = type === "cart";

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    upi: "",
    wallet: "",
    card: "",
  });

  // ✅ Build cart/summary dynamically
  const cartSummary = useMemo(() => {
    const discountPercent = 15;
    const deliveryFee = 40;
    const gstPercent = 5;

    if (isCartFlow) {
      const basePrice = subtotal || 0;
      const discountAmount = (basePrice * discountPercent) / 100;
      const gstAmount = ((basePrice - discountAmount) * gstPercent) / 100;
      const totalAmount = basePrice - discountAmount + deliveryFee + gstAmount;

      return {
        items: cart,
        price: basePrice,
        discountPercent,
        discountAmount,
        deliveryFee,
        gstPercent,
        gstAmount,
        totalAmount,
      };
    } else {
      const {
        name = "Unknown Product",
        size = "-",
        qty = 1,
        price = 0,
        img = "",
        productId = "",
      } = rest;

      const basePrice = price * qty;
      const discountAmount = (basePrice * discountPercent) / 100;
      const gstAmount = ((basePrice - discountAmount) * gstPercent) / 100;
      const totalAmount = basePrice - discountAmount + deliveryFee + gstAmount;

      return {
        items: [{ productId, name, size, qty, price, img }],
        price: basePrice,
        discountPercent,
        discountAmount,
        deliveryFee,
        gstPercent,
        gstAmount,
        totalAmount,
      };
    }
  }, [isCartFlow, cart, subtotal, rest]);

  // ✅ Handle payment & navigate to summary
  // ✅ Handle payment & navigate to summary
const handlePayNow = () => {
  if (!paymentMethod) {
    alert("Please select a payment method.");
    return;
  }
  if (!paymentDetails[paymentMethod]) {
    alert(`Please enter your ${paymentMethod.toUpperCase()} details.`);
    return;
  }

  navigate("/order-summary", {
    state: {
      type,
      items: cartSummary.items,  // ✅ Array of ordered products
      cartSummary,               // ✅ Price, gst, discount, total
      paymentMethod,
      paymentId: paymentDetails[paymentMethod],
      totalAmount: cartSummary.totalAmount,
      address: {
        name: rest.name,
        mobile: rest.mobile,
        address: rest.address,
        notes: rest.notes,
        location: rest.location,
      },
      orderId: `DRF${Math.random().toString(36).substring(2, 12).toUpperCase()}`,
      placedAt: new Date(),
    },
  });
};


  return (
    <div className="bg-[#FFF8F0] min-h-screen font-[League_Spartan] flex flex-col items-center px-4 py-8">
      {/* Heading */}
      <h2 className="text-[#e57f35] font-bold text-lg md:text-xl tracking-wide mb-6">
        PAYMENT OPTIONS
      </h2>

      {/* Payment Methods */}
      <div className="bg-white border border-gray-300 rounded-md w-full max-w-lg shadow-sm p-5 space-y-6">
        {/* UPI */}
        <div className="flex items-center space-x-4">
          <img src={upiIcon} alt="UPI" className="w-12 h-12" />
          <div className="flex flex-col flex-1">
            <p className="font-bold text-black text-lg">Pay UPI</p>
            <p className="text-sm text-gray-700">+UPI Id</p>
            <input
              type="text"
              placeholder="Enter Id"
              value={paymentDetails.upi}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, upi: e.target.value })
              }
              className="border border-gray-300 rounded-sm px-2 py-1 text-sm focus:outline-none mt-1"
            />
          </div>
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "upi"}
            onChange={() => setPaymentMethod("upi")}
            className="w-5 h-5 accent-[#e57f35]"
          />
        </div>

        {/* Wallet */}
        <div className="flex items-center space-x-4">
          <img src={walletIcon} alt="Wallet" className="w-12 h-12" />
          <div className="flex flex-col flex-1">
            <p className="font-bold text-black text-lg">Pay Wallet</p>
            <p className="text-sm text-gray-700">+Wallet Id</p>
            <input
              type="text"
              placeholder="Enter Id"
              value={paymentDetails.wallet}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, wallet: e.target.value })
              }
              className="border border-gray-300 rounded-sm px-2 py-1 text-sm focus:outline-none mt-1"
            />
          </div>
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "wallet"}
            onChange={() => setPaymentMethod("wallet")}
            className="w-5 h-5 accent-[#e57f35]"
          />
        </div>

        {/* Card */}
        <div className="flex items-center space-x-4">
          <img src={cardIcon} alt="Credit Card" className="w-12 h-12" />
          <div className="flex flex-col flex-1">
            <p className="font-bold text-black text-lg">Pay Credit Card</p>
            <p className="text-sm text-gray-700">+Credit Card Id</p>
            <input
              type="text"
              placeholder="Enter Id"
              value={paymentDetails.card}
              onChange={(e) =>
                setPaymentDetails({ ...paymentDetails, card: e.target.value })
              }
              className="border border-gray-300 rounded-sm px-2 py-1 text-sm focus:outline-none mt-1"
            />
          </div>
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="w-5 h-5 accent-[#e57f35]"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full max-w-lg mt-8 space-y-2 text-sm md:text-base">
        {cartSummary.items.map((item, idx) => (
          <div key={idx} className="flex justify-between">
            <span>
              {item.qty} × {item.name} ({item.size})
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <hr className="my-2 border-gray-400" />
        <div className="flex justify-between">
          <span>TOTAL PRODUCT PRICE</span>
          <span>+₹{cartSummary.price}</span>
        </div>
        <div className="flex justify-between">
          <span>DISCOUNT AMOUNT {cartSummary.discountPercent}%</span>
          <span>-₹{cartSummary.discountAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>DELIVERY FEE</span>
          <span>+₹{cartSummary.deliveryFee}</span>
        </div>
        <div className="flex justify-between">
          <span>INCL. GST {cartSummary.gstPercent}%</span>
          <span>+₹{cartSummary.gstAmount}</span>
        </div>
        <hr className="my-2 border-gray-400" />
        <div className="flex justify-between font-bold text-lg">
          <span>TOTAL PRICE AMOUNT</span>
          <span>₹{cartSummary.totalAmount}</span>
        </div>
      </div>

      {/* Pay Button */}
      <button
        onClick={handlePayNow}
        className="mt-6 bg-[#F3E5AB] hover:bg-[#e5d499] text-black font-bold py-2 px-8 rounded-full shadow-sm tracking-wide"
      >
        PAY & ORDER NOW
      </button>
    </div>
  );
};

export default PaymentOptions;
