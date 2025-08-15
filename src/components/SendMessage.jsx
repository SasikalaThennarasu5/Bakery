import React from "react";
import cakeImage from "../assets/images/calories.png"; // Update path if needed

export default function SendMessage() {
  return (
    <section className="bg-[#FFF8F0] min-h-screen py-12 px-4 font-league">
      <div className="max-w-6xl mx-auto">

        {/* Title & Subtitle */}
        <h2 className="text-[#e57f35] text-5xl font-bold uppercase text-center ">
          Send Us a Message
        </h2>
        <br />
        <p className="text-center md:text-left text-black font-medium text-2xl mt-2">
          You can also use the form below to contact us directly. Our team will
          get back to you within 24 hours.
        </p>

        {/* Content Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left - Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-2xl font-medium text-black">
                  Name*
                </label>
                <br />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#e57f35]"
                />
              </div>

              <div>
                <label className="block text-2xl font-medium text-black">
                  E Mail*
                </label>
                <br />
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#e57f35]"
                />
              </div>

              <div>
                <label className="block text-2xl font-medium text-black">
                  Phone Number*
                </label>
                <br />
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#e57f35]"
                />
              </div>

              <div>
                <label className="block text-2xl font-medium text-black">
                  Subject*
                </label>
                <br />
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#e57f35]"
                />
              </div>

              <div>
                <label className="block text-2xl font-medium text-black">
                  Message*
                </label>
                <br />
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#e57f35]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFD93D] text-2xl  text-black font-bold py-2 px-6 rounded-md hover:bg-[#e57f35] hover:text-white transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={cakeImage}
              alt="Quote"
              className="max-w-sm w-full border-2 border-[#F3E5AB] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
