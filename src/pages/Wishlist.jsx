import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { FaHeart } from "react-icons/fa";

export default function Wishlist() {
  const { wishlist, toggleWishlist } = useStore();
  const navigate = useNavigate();

  return (
    <section className="bg-[#FFF8F0] py-10 font-spartan">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-xl font-bold text-[#D99A6C] mb-4">Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {wishlist.map((p) => (
              <div key={p.id} className="bg-white border border-black/10 shadow rounded-lg overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-40 object-cover" />
                <div className="p-3">
                  <div className="font-bold text-sm">{p.name}</div>
                  <div className="text-xs opacity-80 mb-2">₹ {p.price}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/product/${p.id}`)}
                      className="px-3 py-1 rounded-full text-xs bg-[#D99A6C] text-white"
                    >
                      VIEW
                    </button>
                    <button
                      onClick={() => toggleWishlist(p)}
                      className="px-3 py-1 rounded-full text-xs bg-white border flex items-center gap-1"
                    >
                      <FaHeart className="text-red-500" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
