import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { cart } = useStore();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);

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
                <div key={product.id} className="bg-white border border-black/10 shadow rounded p-3 flex gap-3 items-center">
                  <img src={product.img} alt={product.name} className="h-16 w-16 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-bold text-sm">{product.name}</div>
                    <div className="text-xs opacity-80">
                      {product.chosenSize ? `${product.chosenSize} • ` : ""}Qty: {qty}
                    </div>
                  </div>
                  <div className="text-sm font-semibold">₹ {product.price * qty}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="text-sm font-semibold">Total: ₹ {total}</div>
              <button
                onClick={() => navigate("/payment")}
                className="px-5 py-2 bg-[#D99A6C] text-white rounded-full font-bold"
              >
                PROCEED TO PAY
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
