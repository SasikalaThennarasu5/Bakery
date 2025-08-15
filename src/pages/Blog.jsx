// src/pages/Blog.jsx
import React from "react";
import breadImg from "../assets/images/breadblog.png";
import cakeImg from "../assets/images/cakeblog.png";

export default function Blog() {
  return (
    <div
      className="w-full min-h-screen bg-[#FFF8F0] font-league px-4 md:px-10 lg:px-20 py-8"
      style={{ fontFamily: "'League Spartan', sans-serif" }}
    >
      {/* Header */}
      <h1 className="text-center text-[#e57f35] text-2xl md:text-4xl font-bold mb-8">
        Welcome to Our Bakery Blog
      </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={breadImg}
            alt="Fresh Bread"
            className="rounded-xl object-cover w-full max-w-sm shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-4xl font-bold text-gray-950 mb-4 text-center">
            Fresh Bakes, Sweet Stories & Artisan Inspiration
          </h2>
          <p className="text-gray-950 font-medium text-3xl leading-tight">
            At Cheri Bakery, our passion for baking goes beyond the oven—it's a
            story we love to share. This blog is your go-to destination for
            everything sweet, savory, and lovingly handmade. Whether you're a
            fellow baker, a food lover, or just someone who enjoys the warmth of
            freshly baked bread, our blog is filled with something just for you.
          </p>
        </div>
      </div>

      {/* What You'll Find Section */}
      <h3 className="text-[#e57f35] text-lg md:text-4xl font-bold mb-6">
        What You’ll Find Here:
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
        {/* Left Text List */}
        <div className="space-y-6">
          {[
            {
              title: "Behind-the-Scenes Stories",
              desc: "Get a peek inside our kitchen, meet our talented bakers, and learn what goes into creating your favorite pastries, cakes, and loaves.",
            },
            {
              title: "Seasonal Specials & New Arrivals",
              desc: "Be the first to know about our latest menu additions, seasonal treats, and limited-edition goodies.",
            },
            {
              title: "Recipes & Baking Tips",
              desc: "Try your hand at some of our favorite recipes and get expert tips to help you bake like a pro at home.",
            },
            {
              title: "Customer Spotlights & Events",
              desc: "We love our community! Read about our amazing customers, featured events, and special moments shared in our bakery.",
            },
            {
              title: "Sustainability & Ingredients",
              desc: "Learn more about the ingredients we use, our sourcing practices, and how we're working to bake better—for you and the planet.",
            },
          ].map((item, index) => (
            <div key={index}>
              <h4 className="text-[#D99A6C] font-extrabold text-3xl mb-1">
                {item.title}
              </h4>
              <p className="text-gray-950 font-medium text-3xl leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={cakeImg}
            alt="Blueberry Cake"
            className="rounded-xl object-cover w-full max-w-sm shadow-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-[#744d31] font-medium text-3xl max-w-4xl mx-auto">
        Whether you’re here for mouthwatering ideas or curious about what’s next
        in our oven, our blog is a delicious stop on your journey. Stay connected
        with us, leave a comment, and don’t forget to subscribe so you never
        miss a crumb!
      </p>
    </div>
  );
}
