import React from "react";
import { useLocation } from "react-router-dom";
import flowerImage from "../assets/images/flowerimage.png";
import ProductDetails from "../components/ProductDetails";
import AddAdress from "../components/AddAdress";
import PaymentOptions from "../components/PaymentOptions";

export default function Payment() {
  // Get product data from navigation state
  const location = useLocation();
  const productData = location.state || {};

  return (
    <section className="bg-[#FFF8F0] py-10 font-spartan">
      {/* Pass product data to components */}
      <ProductDetails product={productData} />
      <AddAdress product={productData} />
      <PaymentOptions product={productData} />

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
