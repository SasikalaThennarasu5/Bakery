// Summary.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const { productImage, productId } = location.state || {};

  const orderDate = new Date();
  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(orderDate.getDate() + 1);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "A.M";
    hours = hours % 12 || 12;
    return `${day}-${month}-${year} ${hours}.${minutes} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-[League_Spartan] p-4 flex flex-col items-center justify-center">
      <h2 className="text-center text-lg md:text-2xl font-bold text-[#e57f35] tracking-wide mb-6">
        THE ORDER WAS PROCESSED, FULFILLED, AND DELIVERED
        <br />
        AS WITHIN ONE DAY
      </h2>

      <div className="bg-[#F3E5AB] p-6 md:p-10 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            ORDER SUMMARY
          </h3>
          <p className="mb-2">
            <span className="font-semibold">PRODUCT ID:</span> {productId || "N/A"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">ORDER DATE:</span> {formatDate(orderDate)}
          </p>
          <p className="mb-2">
            <span className="font-semibold">EXPECTED DELIVERY DATE:</span>{" "}
            {formatDate(deliveryDate)}
          </p>
          <p>
            <span className="font-semibold">TRACKING ID:</span> zZvfd457G
          </p>
        </div>

        <div className="flex justify-center">
          {productImage ? (
            <img
              src={productImage}
              alt="Ordered Product"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-h-64"
            />
          ) : (
            <p>No product image available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
