// src/components/YouMayAlsoLike.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products"; // your full product catalog

export default function YouMayAlsoLike({ category, currentId }) {
  const navigate = useNavigate();

  // Filter products: same category, excluding current product
  const related = products.filter(
    (p) => p.category === category && p.id !== currentId
  ).slice(0, 4);;

  return (
    <section className="bg-[#FFF8F0] py-10 px-4 font-spartan">
      <h2 className="text-[#e57f35] text-xl md:text-2xl font-bold mb-6">
        You May Also Like
      </h2>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {related.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-black/10 shadow hover:shadow-lg transition cursor-pointer flex flex-col"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover hover:scale-105 transition-transform"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-sm font-bold text-black mb-1 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-[#e57f35] font-semibold text-sm mb-3">
                ₹ {item.price}
              </p>
              <button
                className="mt-auto bg-[#F3E5AB] border border-black rounded-full py-1.5 text-sm font-bold hover:brightness-95"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/product/${item.id}`);
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
