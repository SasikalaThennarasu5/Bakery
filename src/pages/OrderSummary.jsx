import React from "react";
import Summary from "../components/Summary"; 
import TrackYourOrder from "../components/TrackYourOrder";

const OrderSummary = () => {
  return (
    <main className="bg-[#FFF8F0]">
      {/* Contact Form Section */}
      <section className="py-12">
        <Summary />
      </section>

      {/* Branches Section */}
      <section className="py-12">
        <TrackYourOrder />
      </section>
    </main>
  );
};

export default OrderSummary;
