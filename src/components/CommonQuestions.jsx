import React from "react";
import pinkcookies from "../assets/images/pinkcookies.png";

const CommonQuestions = () => {
  return (
    <section className="bg-[#FFF8F0] font-['League_Spartan'] px-6 py-12 md:px-12 lg:px-20">
      {/* Title */}
      <h2 className="text-center text-[#e57f35] text-2xl md:text-4xl font-extrabold mb-12 uppercase tracking-wide">
        Common Question for Customers
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch">
        {/* Left Section - Questions */}
        <div className="flex-1 space-y-10">
          {/* Q1 */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-3">
              1. What kind of content do you post on your blog?
            </h3>
            <p className="text-lg md:text-3xl text-gray-900 leading-relaxed">
              We share a variety of content including baking tips, behind-the-scenes
              stories from our bakery, seasonal updates, recipes, product highlights,
              and community events.
            </p>
            <hr className="border-dotted border-gray-400 mt-4" />
          </div>

          {/* Q2 */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-3">
              2. How often do you update the blog?
            </h3>
            <p className="text-lg md:text-3xl text-gray-900 leading-relaxed">
              We aim to post new content at least once or twice a month. Check back
              regularly or subscribe to our newsletter for updates!
            </p>
            <hr className="border-dotted border-gray-400 mt-4" />
          </div>

          {/* Q3 */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-3">
              3. Can I request a blog topic or recipe?
            </h3>
            <p className="text-lg md:text-3xl text-gray-900 leading-relaxed">
              Absolutely! We love hearing from our readers. If there's a recipe or topic
              you’d like us to cover, feel free to contact us or leave a comment on a
              blog post.
            </p>
            <hr className="border-dotted border-gray-400 mt-4" />
          </div>

          {/* Q4 */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-3">
              4. Are the recipes you share easy to follow for beginners?
            </h3>
            <p className="text-lg md:text-3xl text-gray-900 leading-relaxed">
              Yes! We include clear instructions, tips, and sometimes even step-by-step
              photos to help bakers of all levels enjoy the process.
            </p>
            <hr className="border-dotted border-gray-400 mt-4" />
          </div>

          {/* Q5 */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-black mb-3">
              5. Do you feature guest posts or collaborations?
            </h3>
            <p className="text-lg md:text-3xl text-gray-900 leading-relaxed">
              We are open to collaborating with local chefs, food bloggers, and
              community members who share our passion for baking.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-[40%] flex">
          <img
            src={pinkcookies}
            alt="Pink and Yellow Macarons"
            className="w-full h-auto lg:h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
