import React, { useState } from "react";
import cameraImg from "../assets/images/camera.png";
import dogImg from "../assets/images/dog.png";
import { FaArrowRightLong } from "react-icons/fa6"; // Long arrow icon

const reviews = [
  {
    img: cameraImg,
    quote1: "A hidden gem with real passion behind every bake.",
    quote2:
      "You can taste the quality in every bite. It’s clear they care deeply about their craft.",
    author: "— Daniel K., Chef & Culinary Enthusiast",
  },
  {
    img: dogImg,
    quote1: "The kids love the cookies—and so do I!",
    quote2:
      "We stop by after school for their chocolate chip cookies. Soft, gooey, and always fresh.",
    author: "— Lena W., Mom of Two",
  },
  {
    img: cameraImg,
    quote1: "Amazing pastries every morning!",
    quote2:
      "The croissants are buttery, flaky, and absolutely delicious. A must-visit bakery.",
    author: "— Emily R., Food Blogger",
  },
  {
    img: dogImg,
    quote1: "My go-to place for birthday cakes.",
    quote2:
      "They customize with so much care. The taste is perfect every single time.",
    author: "— Chris P., Dad of Three",
  },
];

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 2; // Always show 2 reviews at a time

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerSlide >= reviews.length ? 0 : prev + itemsPerSlide
    );
  };

  return (
    <section className="bg-bakeryWhite min-h-screen flex flex-col items-center font-spartan py-12 px-4">
      {/* Heading */}
      <h2 className="text-center text-[#e57f35] text-2xl md:text-4xl font-extrabold mb-12 uppercase tracking-wide">
        OUR CUSTOMERS LOVE
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* Cards Container */}
        <div className="flex gap-12 justify-center">
          {reviews
            .slice(currentIndex, currentIndex + itemsPerSlide)
            .map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center w-full max-w-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={review.img}
                  alt="Reviewer"
                  className="w-24 h-24 rounded-full object-cover border-2 border-bakeryBrown"
                />
                <p className="mt-6 text-3xl font-medium text-black">
                  "{review.quote1}"
                </p>
                <p className="text-3xl font-medium mt-2">“{review.quote2}”</p>
                <p className="text-3xl mt-4 font-semibold text-black">
                  {review.author}
                </p>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl text-black hover:scale-110 transition z-10"
        >
          <FaArrowRightLong />
        </button>
      </div>
       
       {/* Banner at the end */}
      <div className="flex items-center justify-between  px-6 py-4 mt-16 w-full max-w-5xl rounded-lg shadow-md">
        <p className="text-lg text-center md:text-2xl font-extrabold text-black">
          Direct visits chat item available
        </p>
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-sm md:text-base font-semibold text-black">
            see menu
          </span>
          <FaArrowRightLong className="text-black text-lg transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>


    </section>
  );
};

export default Customers;
