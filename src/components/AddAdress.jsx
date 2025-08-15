// src/components/AddAddress.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cakeImage from "../assets/images/addressimage.png";

const AddAddress = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the product data from ProductDetails.jsx
  const productData = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass along the product data to PaymentOptions.jsx
    navigate("/payment-options", { state: productData });
  };

  return (
    <div className="bg-[#FFF8F0] min-h-screen flex items-center justify-center px-4 py-8 font-[League_Spartan]">
      <div className="max-w-6xl w-full bg-[#FFF8F0] rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Form */}
        <div className="px-4 md:px-8">
          <h2 className="text-center text-[#e57f35] font-bold text-lg md:text-xl mb-6 tracking-wide">
            ADD ADDRESS
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-1">NAME*</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
              />
            </div>

            {/* Delivery Location */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                DELIVERY LOCATION*
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-semibold mb-1">MOBILE NO*</label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
              />
            </div>

            {/* Add Notes */}
            <div>
              <label className="block text-sm font-semibold mb-1">ADD NOTES*</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold mb-1">ADDRESS*</label>
              <textarea
                rows="3"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#F3E5AB] text-[#000] font-bold py-2 rounded-md hover:bg-[#eacb7c] transition"
            >
              ADD ADDRESS
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={cakeImage}
            alt="Cakes"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
