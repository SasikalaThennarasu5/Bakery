// src/components/ProductDescription.jsx
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../data/products";
import { useStore } from "../context/StoreContext";

export default function ProductDescription() {
  const { id } = useParams();
  const product = useMemo(() => getProduct(id), [id]);
  const [size, setSize] = useState(product?.sizes?.[0] ?? "500 G");
  const [qty, setQty] = useState(1);
  const [pin, setPin] = useState("");
  const { addToCart } = useStore();
  const navigate = useNavigate();

  if (!product) return <div className="p-10">Product not found.</div>;

  const handleAdd = () => {
    addToCart({ ...product, chosenSize: size }, qty);
    navigate("/cart"); // redirect to Cart.jsx
  };

  const goBuyNow = () => {
  navigate(`/payment/${product.id}/product-details`, {
    state: {
      id: product.id,
      name: product.name,
      size,
      qty,
      price: product.price,
      img: product.img,
    },
  });
};



  return (
    <section className="bg-[#FFF8F0] font-[League_Spartan]">
      <div className="max-w-[1150px] mx-auto px-4 pt-7 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: image + pincode + badges */}
          <div className="space-y-5">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Pincode */}
            <div>
              <label
                htmlFor="pin"
                className="text-[13px] font-semibold tracking-wide block mb-2"
              >
                ENTER YOUR PINCODE*
              </label>
              <input
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full rounded-md border border-black/20 px-4 py-3 outline-none bg-white"
              />
            </div>

            {/* badges */}
            <div className="space-y-4">
              <BadgeLine icon="🔒" text="100% secure payment" />
              <BadgeLine icon="⏱️" text="24 hour preparation time" />
              <BadgeLine icon="🌱" text="100% vegetarian" />
            </div>

            <p className="text-[12px] text-black/70">
              ** Note that all orders will be dispatched after 24 hours **
            </p>
          </div>

          {/* RIGHT: details */}
          <div className="pt-1">
            <p className="text-[12px] text-black/70 mb-1">
              {product.brand ?? "Cherii bakery"}
            </p>

            <h1 className="text-[#e57f35] font-extrabold tracking-tight text-[26px] sm:text-[28px] mb-4">
              {product.name}
            </h1>

            <p className="text-[25px] leading-[1.25rem] font-bold text-black mb-3">
              {product.lead ??
                "This delectable treat is a heavenly combination of rich, velvety chocolate and a melt-in-your-mouth texture. Whether you’re a chocolate lover or looking to satisfy your sweet tooth, Choco Delight Cake is the perfect choice."}
            </p>

            {/* price */}
            <div className="mb-4">
              <div className="text-[24px] font-extrabold tracking-tight">
                ₹ {product.price}
              </div>
              <div className="text-[11px] uppercase tracking-wide text-black/70 mt-[2px]">
                INCL.OF ALL TAXES
              </div>
            </div>

            {/* weight */}
            {!!product.sizes?.length && (
              <div className="mb-4">
                <div className="text-[12px] font-bold mb-2">WEIGHT:</div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`h-7 px-3 rounded-full text-[12px] border flex items-center gap-1
                        ${
                          size === s
                            ? "bg-[#F3E5AB] border-black/30 font-bold shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]"
                            : "bg-white border-black/20 hover:border-black/40"
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* quantity */}
            <div className="mb-5">
              <div className="text-[12px] font-bold mb-2">QUANTITY:</div>

              <div className="inline-flex items-center border border-black/20 rounded-md overflow-hidden">
                <button
                  onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
                  className="w-10 h-9 grid place-items-center select-none"
                  aria-label="decrease"
                >
                  -
                </button>
                <div className="px-4 h-9 grid place-items-center text-[13px]">
                  {String(qty).padStart(2, "0")}
                </div>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-9 grid place-items-center select-none"
                  aria-label="increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* actions */}
            <div className="space-y-3">
              <button
                onClick={handleAdd}
                className="w-full h-10 rounded-full bg-[#F3E5AB] border border-black/40 text-[14px] font-extrabold hover:brightness-95"
              >
                ADD TO CART
              </button>
              <button
                onClick={goBuyNow}
                className="w-full h-10 rounded-full bg-[#e57f35] text-white text-[14px] font-extrabold hover:brightness-95"
              >
                BUY NOW
              </button>
            </div>

            {/* info cards */}
            <div className="mt-6 space-y-3">
              {product.nutrition && (
                <InfoCard title="Nutrition:">{product.nutrition}</InfoCard>
              )}
              {product.ingredients && (
                <InfoCard title="Ingredients:">{product.ingredients}</InfoCard>
              )}
              {product.allergies && (
                <InfoCard title="Allergies">{product.allergies}</InfoCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeLine({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid place-items-center w-8 h-8 rounded-full bg-[#F3E5AB] border border-black/10 text-[16px]">
        {icon}
      </span>
      <span className="text-[14px]">{text}</span>
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-lg border border-black/15 bg-white shadow-sm">
      <div className="px-4 py-2 border-b border-black/10">
        <h3 className="text-[16px] font-extrabold">{title}</h3>
      </div>
      <div className="px-4 py-3">
        <p className="text-[13px] leading-snug text-black/80">{children}</p>
      </div>
    </div>
  );
}
