import React from "react";
import { useNavigate } from "react-router-dom";
import { categories, COLORS } from "../data/products";
import flowerImage from "../assets/images/flowerimage.png";

export default function Products() {
  const navigate = useNavigate();

  return (
    <section className="bg-[##FFF8F0] bg-[#FFF8F0] py-10 font-spartan">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-[48px] font-bold tracking-[0em] text-[#e57f35] mb-4">
          OUR PRODUCTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => navigate(`/products/${c.slug}`)}
              className="text-left group rounded-lg overflow-hidden bg-white shadow border border-black/10 focus:outline-none flex flex-col"
            >
              <div className="relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-84 object-cover"
                  loading="lazy"
                />
              </div>

              
            </button>
          ))}
        </div>

        {/* little divider flourish if you want, matching your design */}
        <div className="mt-10 flex justify-center">
          <div
            className="h-[2px] w-24 rounded-full"
            style={{ backgroundColor: COLORS.brand }}
          />
        </div>
      </div>
      
      {/* Flower design below CommonQuestions */}
        <div className="flex justify-center my-12">
          <img
            src={flowerImage}
            alt="Decorative flower design"
            className="w-full max-w-4xl"
          />
        </div>
      
    </section>
    
  );
  
}
