// src/components/OurStory.jsx
import React from "react";
import storyImage from "../assets/images/story-image.png"; // your uploaded image

export default function OurStory() {
  return (
    <section className="bg-[#FFF8F0] py-16 px-4 md:px-16 flex flex-col md:flex-row items-center gap-8">
      
      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center md:justify-start">
        <img
          src={storyImage}
          alt="The secret ingredient is always love"
          className="rounded-xl w-full max-w-sm object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-2/3 text-center ">
        <h2 className="text-[#e57f35] text-3xl md:text-4xl font-extrabold mb-6 font-[League Spartan]">
          OUR STORY
        </h2>
        <p className="text-gray-950 font-semibold text-center md:text-3xl mb-6 font-[League Spartan] leading-tight tracking-tight">
          Cherii Bakery began as a home kitchen dream and quickly became a beloved
          neighborhood treasure. Founded on the values of quality, community, and
          homemade charm, we bake everything fresh each day using family recipes
          and locally sourced ingredients.
        </p>
      </div>

    </section>
  );
}
