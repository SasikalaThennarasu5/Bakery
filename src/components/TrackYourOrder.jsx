// src/components/TrackYourDay.jsx
import React from "react";
import mapImage from "../assets/images/map.png";

const TrackYourOrder = () => {
  const now = new Date();
  
  const formatDateTime = (date) => {
    return date.toLocaleDateString("en-GB") + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Generate dynamic times
  const placedTime = now;
  const billingTime = new Date(placedTime.getTime() + 60 * 60 * 1000); // +1 hr
  const loadingTime = new Date(placedTime.getTime() + 3.5 * 60 * 60 * 1000); // +3.5 hrs
  const deliveryTime = new Date(placedTime.getTime() + 24.5 * 60 * 60 * 1000); // Next day +0.5 hr

  const steps = [
    { label: "PLACE YOUR ORDER", time: formatDateTime(placedTime) },
    { label: "BILLING YOUR ORDER", time: formatDateTime(billingTime) },
    { label: "LOADING YOUR ORDER", time: formatDateTime(loadingTime) },
    { label: "DELIVERY EXPECTED", time: formatDateTime(deliveryTime) },
  ];

  return (
    <div className="bg-[#FFF8F0] font-[League_Spartan] px-4 md:px-10 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">
        TRUCK YOUR ORDER
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left - Timeline */}
        <div className="flex flex-col space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              {/* Circle */}
              <div
                className={`w-6 h-6 rounded-full border-4 flex-shrink-0 ${
                  index <= 1
                    ? "border-[#e57f35] bg-[#FFF8F0]"
                    : "border-[#e57f35] bg-transparent"
                }`}
              ></div>
              {/* Line */}
              {index !== steps.length - 1 && (
                <div className="w-0.5 bg-[#e57f35] ml-[11px] -mt-1 mb-1 flex-shrink-0"></div>
              )}

              {/* Text */}
              <div className="ml-4">
                <p className="text-black font-semibold text-lg md:text-xl">
                  {step.label}
                </p>
                <p className="text-black text-sm md:text-base">{step.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Map Image */}
        <div className="flex justify-center">
          <img
            src={mapImage}
            alt="Delivery Map"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackYourOrder;
