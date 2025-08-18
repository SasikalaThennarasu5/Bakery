// src/components/Summary.jsx
import React from "react";
import { useLocation } from "react-router-dom";

export default function Summary() {
  const location = useLocation();

  const {
    type = "single", // "single" or "cart"
    items = [],
    paymentMethod,
    total,
    subtotal,
    taxAmount,
    orderId,
    placedAt,
    address,
  } = location.state || {};

  // Dates
  const orderDate = placedAt ? new Date(placedAt) : new Date();
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
    <section className="min-h-screen bg-[#FFF8F0] font-[League_Spartan] p-4 flex flex-col items-center justify-center">
      <h2 className="text-center text-lg md:text-2xl font-bold text-[#e57f35] tracking-wide mb-6">
        THE ORDER WAS PROCESSED, FULFILLED, AND DELIVERED
        <br />
        WITHIN ONE DAY
      </h2>

      <div className="bg-[#F3E5AB] p-6 md:p-10 rounded-lg shadow-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT - Order Summary */}
        <div className="md:col-span-1">
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            ORDER SUMMARY
          </h3>
          {orderId && (
            <p className="mb-2">
              <span className="font-semibold">ORDER ID:</span> {orderId}
            </p>
          )}
          <p className="mb-2">
            <span className="font-semibold">ORDER DATE:</span>{" "}
            {formatDate(orderDate)}
          </p>
          <p className="mb-2">
            <span className="font-semibold">EXPECTED DELIVERY DATE:</span>{" "}
            {formatDate(deliveryDate)}
          </p>
          <p className="mb-2">
            <span className="font-semibold">PAYMENT METHOD:</span>{" "}
            {paymentMethod?.toUpperCase() || "N/A"}
          </p>
          {subtotal && taxAmount && total && (
            <>
              <p className="mb-2">
                <span className="font-semibold">SUBTOTAL:</span> ₹{subtotal}
              </p>
              <p className="mb-2">
                <span className="font-semibold">TAX:</span> ₹{taxAmount.toFixed(2)}
              </p>
              <p className="mb-2">
                <span className="font-semibold">TOTAL PAID:</span> ₹{total}
              </p>
            </>
          )}
          
          <p>
            <span className="font-semibold">TRACKING ID:</span> zZvfd457G
          </p>
        </div>

        {/* RIGHT - Product(s) */}
        <div className="md:col-span-2 flex flex-col justify-center items-center">
          {items.length > 0 ? (
            <ul className="space-y-3 w-full max-h-80 overflow-y-auto">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center bg-[#FFF8F0] p-3 rounded-md shadow"
                >
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg shadow">
                    <img
                      src={item.img || "/fallback.png"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-semibold text-sm">{item.name}</p>
                    {item.size && (
                      <p className="text-xs text-gray-700">Size: {item.size}</p>
                    )}
                    <p className="text-xs text-gray-700">
                      ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">⚠️ No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}
