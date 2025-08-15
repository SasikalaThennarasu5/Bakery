import React from "react";
import bakeryImg from "../assets/images/visit-image.png"; // replace with actual image path

export default function VisitUs() {
  return (
    <div
      className="font-league bg-[#FFF8F0] text-center px-4 md:px-12 lg:px-24 py-8"
      style={{ fontFamily: "'League Spartan', sans-serif" }}
    >
      {/* Meet the Bakery Section */}
      <div className="bg-[#F3E5AB] rounded-lg py-6 px-4 md:px-8 mb-10">
        <h2 className="text-[#e57f35] text-2xl md:text-3xl font-bold mb-3">
          MEET THE BAKERY
        </h2>
        <p className="text-base md:text-2xl font-medium text-gray-950 max-w-6xl mx-auto leading-tight">
          Our team is made up of passionate bakers who bring skill, creativity,
          and care to every product. From our Head Baker to our pastry chefs,
          everyone shares a commitment to quality and customer happiness.
        </p>
      </div>

      {/* Come Visit Us Section */}
      <h2 className="text-[#e57f35] text-2xl md:text-3xl font-bold mb-6">
        COME VISIT US
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Text */}
        <div className="flex-1 text-base md:text-3xl font-medium text-gray-950 max-w-4xl mx-auto leading-tight">
          <p className="mb-6">
            We’re severing smiles across Tamil Nadu with many franchise
            location!
          </p>
          <p className="mb-6">
            Drop by your nearest branch and enjoy our fresh, handcrafted
            treats.
          </p>

          <h3 className="text-[#e57f35] text-2xl md:text-3xl font-bold mb-4">
            Head office:
          </h3>
          <p>
            Cherii bakery, <br />
            No.45, Anna Salai, T.Nager, <br />
            chennai-600 017, <br />
            Tamil Nadu, India
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bakeryImg}
            alt="Bakery Illustration"
            className="w-64 md:w-80 lg:w-96 rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
