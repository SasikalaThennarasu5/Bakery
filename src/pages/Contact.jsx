import React from "react";
import SendMessage from "../components/SendMessage"; 
import Branches from "../components/Branches";

const Contact = () => {
  return (
    <main className="bg-[#FFF8F0]">
      {/* Contact Form Section */}
      <section className="py-12">
        <SendMessage />
      </section>

      {/* Branches Section */}
      <section className="py-12">
        <Branches />
      </section>
    </main>
  );
};

export default Contact;
