// src/components/ProductDescription.jsx
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, relatedProducts } from "../data/products"; // Make sure relatedProducts is available
import { useStore } from "../context/StoreContext";
import YouMayAlsoLike from "../components/YouMayAlsoLike";

export default function ProductDescription() {
  const { id } = useParams();
  const product = useMemo(() => getProduct(id), [id]);
  const [size, setSize] = useState(product?.sizes?.[0] ?? "1kg");
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useStore();

  if (!product) return <div className="p-10">Product not found.</div>;

  const handleAdd = () => {
    addToCart({ ...product, chosenSize: size }, qty);
    navigate("/cart");
  };

  return (
    <section className="bg-[#FFF8F0] py-10 font-spartan">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Product Image */}
        <div className="rounded-lg overflow-hidden border border-black/10 shadow-lg bg-white p-2">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Product Details */}
        <div>
          {/* Title */}
          <h1 className="text-[#e57f35] font-extrabold text-3xl mb-3">
            {product.name}
          </h1>

          {/* Description */}
          <p className="text-gray-800 text-sm leading-relaxed mb-4 max-w-prose">
            {product.description ??
              "Delicious, fresh and baked with love. Pick your size and quantity."}
          </p>

          {/* Price */}
          <div className="text-lg font-semibold text-black mb-4">
            ₹ {product.price}{" "}
            <span className="text-gray-500 text-sm">incl. of all taxes</span>
          </div>

          {/* Weight / Size */}
          {product.sizes?.length > 0 && (
            <div className="mb-4">
              <div className="text-xs mb-2 font-semibold">WEIGHT</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      size === s
                        ? "bg-[#e57f35] text-white"
                        : "bg-white text-black border border-gray-300 hover:border-[#e57f35]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-5">
            <div className="text-xs mb-2 font-semibold">QUANTITY</div>
            <select
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {String(n).padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAdd}
              className="flex-1 bg-[#F3E5AB] border border-black rounded-full py-2 font-bold hover:brightness-95"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => navigate("/payment")}
              className="flex-1 bg-[#e57f35] text-white rounded-full py-2 font-bold hover:brightness-95"
            >
              BUY NOW
            </button>
          </div>

          {/* Info Sections */}
          <div className="mt-6 space-y-3">
            {product.nutrition && (
              <textarea
                readOnly
                className="w-full text-sm p-3 rounded border border-gray-300 bg-white"
                rows={3}
                value={`Nutrition:\n${product.nutrition}`}
              />
            )}
            {product.ingredients && (
              <textarea
                readOnly
                className="w-full text-sm p-3 rounded border border-gray-300 bg-white"
                rows={3}
                value={`Ingredients:\n${product.ingredients}`}
              />
            )}
            {product.allergies && (
              <textarea
                readOnly
                className="w-full text-sm p-3 rounded border border-gray-300 bg-white"
                rows={3}
                value={`Allergies:\n${product.allergies}`}
              />
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}

      {/* Related Products */}
      
<YouMayAlsoLike category={product.category} currentId={product.id} />


    </section>
  );
}
