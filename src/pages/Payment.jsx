import React, { useEffect, useState } from "react";
import { useLocation, useParams, Outlet } from "react-router-dom";
import flowerImage from "../assets/images/flowerimage.png";
import { getProduct } from "../data/products";

export default function Payment() {
  const location = useLocation();
  const { id } = useParams();
  const [productData, setProductData] = useState(location.state || null);

  useEffect(() => {
    if (!productData && id) {
      const fetchedProduct = getProduct(id);
      if (fetchedProduct) {
        setProductData({
          ...fetchedProduct,
          ...location.state, // merge qty, size, etc
        });
      }
    }
  }, [id, productData, location.state]);

  if (!productData) {
    return (
      <section className="bg-[#FFF8F0] py-10 font-spartan text-center">
        <h2 className="text-xl text-red-600 font-semibold">
          Product not found
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-[#FFF8F0] py-10 font-spartan min-h-screen">
      {/* render nested child route (ProductDetails, AddAddress, etc.) */}
      <Outlet context={{ product: productData }} />

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
