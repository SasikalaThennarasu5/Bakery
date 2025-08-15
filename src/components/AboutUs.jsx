// src/components/AboutUs.jsx
import React from "react";
import aboutImage from "../assets/images/about-image.png"; 

export default function AboutUs() {
  return (
    <section className="bg-[#FFF8F0] py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Text Section */}
      <div className="md:w-2/3 text-center ">
        <h2 className="text-[#e57f35] text-3xl md:text-4xl font-extrabold mb-8 font-[League Spartan]">
          ABOUT US
        </h2>
        <p className="text-gray-950 font-semibold text-center md:text-3xl mb-6 font-[League Spartan] leading-tight tracking-tight">
          Baking From the Heart Since 2012
          <br />
          At Cherii Bakery, every loaf, pastry, and cake tells a story. What
          started as a small kitchen passion has blossomed into a community
          favorite. We believe in using time-honored recipes, fresh local
          ingredients, and a generous sprinkle of love in every bite.
        </p>
        <p className="text-gray-950 font-semibold text-center text-lg md:text-3xl mb-6 font-[League Spartan] leading-tight tracking-tight">
          Our mission is to bring joy through handcrafted baked goods made
          daily with care and dedication. Whether it's your morning bread or a
          special occasion cake, we treat each creation as if it’s for family.
        </p>
        <p className="text-gray-950 font-semibold text-center text-lg md:text-3xl font-[League Spartan] leading-tight tracking-tight">
          We’re proud to serve our neighborhood, support local farmers, and
          bake a little happiness into every day.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <img
          src={aboutImage}
          alt="Bake it till you make it"
          className="rounded-xl w-full max-w-sm object-cover"
        />
      </div>
    </section>
  );
}
