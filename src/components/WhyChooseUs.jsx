import React from "react";
import choose1 from "../assets/images/choose1.png";
import choose2 from "../assets/images/choose2.png";
import choose3 from "../assets/images/choose3.png";
import choose4 from "../assets/images/choose4.png";
import choose5 from "../assets/images/choose5.png";

const whyChooseUsData = [
  {
    img: choose1,
    title: "Fresh, Handcrafted Daily",
    text: "Every morning, our bakers start early to bring you the freshest breads, pastries, and cakes—made from scratch using real, wholesome ingredients.",
  },
  {
    img: choose2,
    title: "Locally Sourced Ingredients",
    text: "We partner with local farms and suppliers to ensure the highest quality and support our community.",
  },
  {
    img: choose3,
    title: "Unique & Custom Creations",
    text: "From classic croissants to custom birthday cakes, we bake with creativity and care—tailored to your tastes and special occasions.",
  },
  {
    img: choose4,
    title: "Warm, Welcoming Atmosphere",
    text: "We’re more than just a bakery—we’re your neighborhood spot for sweet treats, good coffee, and friendly smiles.",
  },
  {
    img: choose5,
    title: "Passion for Excellence",
    text: "Baking is our passion, and it shows in every detail—from the golden crust to the last crumb.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#fff8f0] py-12 font-spartan">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-[#e57f35] text-2xl md:text-4xl font-extrabold mb-12 uppercase tracking-wide">
        Why Choose Us
      </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black shadow-md rounded-xl p-6 flex flex-col items-center text-center h-[500px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-24 h-24 mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#e57f35] font-black text-3xl mb-4">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-950 font-extrabold text-2xl md:text-2xl mb-6 font-[League Spartan] leading-tight tracking-tight">
              {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
