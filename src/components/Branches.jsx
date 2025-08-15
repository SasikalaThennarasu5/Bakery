import React from "react";
import branchesImg from "../assets/images/branches.png";

const branches = [
  { city: "Chennai", address: "No. 45, Anna Salai, T. Nagar, Chennai – 600017" },
  { city: "Coimbatore", address: "12, DB Road, RS Puram, Coimbatore – 641002" },
  { city: "Madurai", address: "28, KK Nagar Main Road, Madurai – 625020" },
  { city: "Tiruchirappalli (Trichy)", address: "7, Salai Road, Thillai Nagar, Trichy – 620018" },
  { city: "Salem", address: "15, Five Roads, Fairlands, Salem – 636016" },
  { city: "Tirunelveli", address: "11, South Bypass Road, Palayamkottai, Tirunelveli – 627002" },
  { city: "Erode", address: "9, Brough Road, Erode – 638001" },
  { city: "Vellore", address: "14, Katpadi Road, Gandhi Nagar, Vellore – 632006" },
  { city: "Thoothukudi (Tuticorin)", address: "6, Beach Road, Tuticorin – 628001" },
  { city: "Thanjavur", address: "10, Medical College Road, Thanjavur – 613004" },
  { city: "Dindigul", address: "4, GTN Road, Dindigul – 624005" },
  { city: "Kanchipuram", address: "3, Ekambaranathar Sannathi Street, Kanchipuram – 631502" },
  { city: "Karur", address: "22, Kovai Road, Karur – 639002" },
  { city: "Nagercoil", address: "16, Cape Road, Vadasery, Nagercoil – 629001" },
  { city: "Cuddalore", address: "8, Beach Road, Cuddalore – 607001" },
  { city: "Villupuram", address: "19, Tindivanam Road, Villupuram – 605602" },
  { city: "Namakkal", address: "5, Salem Road, Namakkal – 637001" },
  { city: "Tiruppur", address: "20, Avinashi Road, Tiruppur – 641603" },
];

export default function Branches() {
  return (
    <section className="bg-[#FFF8F0] py-12 px-4 md:px-12 font-['League_Spartan']">
      <h2 className="text-center text-[#e57f35] text-2xl md:text-5xl font-bold mb-10">
        OUR BRANCHES ACROSS TAMIL NADU
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Single Image */}
        <div className="flex justify-center">
          <img 
            src={branchesImg} 
            alt="Our Branches" 
            className="w-full max-w-md"
          />
        </div>

        {/* Right: Branch List */}
        <div className="space-y-4">
          {branches.map((branch, index) => (
            <div key={index}>
              <p className="font-bold text-3xl">{branch.city}</p>
              <p className="text-3xl">{branch.address}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
