// src/components/YouMayAlsoLike.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { relatedProducts } from "../data/products"; // Ensure this array exists in your data

export default function YouMayAlsoLike() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mt-12 font-spartan">
      <h2 className="text-center text-[#e57f35] font-extrabold text-lg mb-6">
        YOU MAY ALSO LIKE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {relatedProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-74 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                FROM: ₹ {item.price} PER KG
              </p>
              <button
                onClick={() => navigate(`/product/${item.id}`)}
                className="mt-auto bg-[#e57f35] text-white rounded-full py-2 font-bold hover:brightness-95"
              >
                VIEW PRODUCT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
