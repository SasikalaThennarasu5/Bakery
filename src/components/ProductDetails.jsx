// src/components/ProductDetails.jsx
import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProduct } from "../data/products";
import { useStore } from "../context/StoreContext";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useStore();

  // State data from navigation
  const stateData = location.state || {};
  const product = useMemo(() => {
    if (stateData.id) {
      return getProduct(stateData.id);
    }
    return null;
  }, [stateData.id]);

  const [selectedWeight, setSelectedWeight] = useState(
    stateData.size || product?.sizes?.[0] || "500 G"
  );
  const [quantity, setQuantity] = useState(stateData.qty || 1);
  const [pincode, setPincode] = useState("");

  if (!product) return <div className="p-10">Product not found.</div>;

  const deliveryDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
  }, []);

  const handleAddToCart = () => {
    addToCart({ ...product, chosenSize: selectedWeight }, quantity);
    navigate("/cart"); // ✅ optional: send user to cart if needed
  };

 const handleProceedToPayment = () => {
  const taxRate = 0.05; // example 5% GST
  const subtotal = product.price * quantity;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  navigate(`/payment/${product.id}/add-address`, {
    state: {
      type: "single", // ✅ mark as single product buy
      id: product.id,
      name: product.name,
      size: selectedWeight,
      qty: quantity,
      price: product.price,
      subtotal,
      taxAmount,
      total,
      img: product.img,
    },
  });
};


  return (
    <section className="bg-[#FFF8F0] py-10 px-4 font-[League_Spartan]">
      <h2 className="text-[#e57f35] text-lg font-semibold text-center mb-6 uppercase tracking-wide">
        Product Details
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT IMAGE + PINCODE */}
        <div className="space-y-5">
          <img
            src={product.img}
            alt={product.name}
            className="rounded-lg w-full max-w-md object-cover shadow-lg mx-auto"
          />

          {/* Pincode */}
          <div>
            <label className="text-sm font-semibold block mb-2">
              ENTER YOUR PINCODE*
            </label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded outline-none focus:border-[#e57f35]"
            />
          </div>

          {/* Delivery info */}
          <div className="text-sm bg-white rounded p-3 border">
            Order today — expected delivery on{" "}
            <span className="font-bold">{deliveryDate}</span>
          </div>
        </div>

        {/* RIGHT PRODUCT INFO */}
        <div>
          <p className="text-sm text-gray-700 mb-2">
            {product.brand || "Cheri bakery"}
          </p>
          <h1 className="text-[#e57f35] text-2xl md:text-3xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-black font-medium leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Price */}
          <div className="mb-6">
            <p className="text-lg font-bold">₹ {product.price}</p>
            <p className="text-xs text-gray-600">INCL. OF ALL TAXES</p>
          </div>

          {/* Weight Options */}
          {!!product.sizes?.length && (
            <div className="mb-6">
              <p className="font-semibold mb-2">WEIGHT:</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`px-3 py-1 border rounded font-medium text-sm transition ${
                      selectedWeight === w
                        ? "bg-[#F3E5AB] border-[#e57f35] text-black"
                        : "bg-white border-gray-300 text-gray-700 hover:border-[#e57f35]"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <p className="font-semibold mb-2">QUANTITY:</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border border-gray-300 bg-white hover:border-[#e57f35]"
              >
                -
              </button>
              <span className="px-4 py-1 border border-gray-300 bg-white">
                {quantity < 10 ? `0${quantity}` : quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border border-gray-300 bg-white hover:border-[#e57f35]"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              className="w-full py-2 rounded-full bg-[#F3E5AB] border border-black/30 font-bold hover:brightness-95"
            >
              ADD TO CART
            </button>
            <button
              onClick={handleProceedToPayment}
              className="w-full py-2 rounded-full bg-[#e57f35] text-white font-bold hover:brightness-95"
            >
              PROCEED TO PAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
