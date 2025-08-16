import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import CommonQuestions from "../components/CommonQuestions";
import Customers from "../components/Customers";
import flowerImage from "../assets/images/flowerimage.png";
import offerImage from "../assets/images/offer.png";


export default function Home() {
  return (
    <div className="bg-[#fff8f0] min-h-screen"> {/* Background for whole page */}
      
      <Hero />
      <WhyChooseUs />


      {/* Offers and Deals Section */}
      <div className="text-center my-12">
        <h2 className="text-center text-[#e57f35] text-2xl md:text-4xl font-bold mb-12 uppercase tracking-wide">
        OFFERS & DEALS
      </h2>
        <img
          src={offerImage}
          alt="Special offers and deals"
          className="w-full max-w-12xl mx-auto"
        />
      </div>

      <CommonQuestions />

      {/* Flower design below CommonQuestions */}
      <div className="flex justify-center my-12">
        <img
          src={flowerImage}
          alt="Decorative flower design"
          className="w-full max-w-4xl"
        />
      </div>

      <Customers />

    </div>
  );
}
