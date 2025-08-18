import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { cart } = useStore();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  const handleProceedToPayment = () => {
    const taxRate = 0.05; // 5% GST example
    const subtotal = total;
    const taxAmount = subtotal * taxRate;
    const grandTotal = subtotal + taxAmount;

    // ✅ Send entire cart to AddAddress
    navigate(`/payment/cart/add-address`, {
      state: {
        type: "cart", // mark as cart checkout
        items: cart.map(({ product, qty }) => ({
          id: product.id,
          name: product.name,
          size: product.chosenSize || null,
          qty,
          price: product.price,
          subtotal: product.price * qty,
          img: product.img, // add this line
        })),
        subtotal,
        taxAmount,
        total: grandTotal,
      },
    });
  };

  return (
    <section className="bg-[#FFF8F0] py-10 font-spartan">
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-xl font-bold text-[#D99A6C] mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <>
            <div className="space-y-3">
              {cart.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="bg-white border border-black/10 shadow rounded p-3 flex gap-3 items-center"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-sm">{product.name}</div>
                    <div className="text-xs opacity-80">
                      {product.chosenSize ? `${product.chosenSize} • ` : ""}Qty:{" "}
                      {qty}
                    </div>
                  </div>
                  <div className="text-sm font-semibold">
                    ₹ {product.price * qty}
                  </div>
                </div>
              ))}
            </div>

            {/* Totals + Proceed button */}
            <div className="mt-6 border-t border-black/10 pt-4">
              <div className="flex justify-between text-sm font-semibold mb-3">
                <span>Total:</span>
                <span>₹ {total}</span>
              </div>
              <button
                onClick={handleProceedToPayment}
                className="w-full py-2 rounded-full bg-[#e57f35] text-white font-bold hover:brightness-95"
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
