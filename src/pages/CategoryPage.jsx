import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { byCategory, products } from "../data/products";
import { useStore } from "../context/StoreContext";
import { FaHeart } from "react-icons/fa";
import flowerImage from "../assets/images/flowerimage.png";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useStore();

  const list = byCategory(category);

  return (
    <section className="bg-[#FFF8F0] py-10 font-spartan">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-[48px] tracking-[0em] font-bold text-[#e57f35] mb-5 uppercase">
          {category.replace("-", " ")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {list.map((p) => {
            const wished = wishlist.some((w) => w.id === p.id);
            return (
              <div
                key={p.id}
                className="rounded-lg overflow-hidden bg-white shadow border border-black/10 relative"
              >
                <button
                  onClick={() => toggleWishlist(p)}
                  className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow"
                  aria-label="toggle wishlist"
                >
                  <FaHeart className={wished ? "text-red-500" : "text-gray-400"} />
                </button>

                <button
                  onClick={() => navigate(`/product/${p.id}`)}
                  className="text-left w-full"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-84 object-cover"
                    loading="lazy"
                  />
                </button>

                
              </div>
            );
          })}
        </div>



        <div className="mt-10 flex justify-center">
          <div className="h-[2px] w-24 rounded-full bg-[#D99A6C]" />
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
