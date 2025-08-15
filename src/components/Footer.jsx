import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import logofoot from "../assets/images/logofoot.png";
import footbg from "../assets/images/footbg.png";

const Footer = () => {
  return (
    <footer
      className="py-10 font-spartan bg-[#FCE7B2] bg-cover bg-center"
      style={{
        backgroundImage: `url(${footbg})`,
      }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <img src={logofoot} alt="Cherii Logo" className="h-34 mb-3" />
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3 text-2xl">Quick Links</h3>
          <ul className="space-y-2 text-2xl ">
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund & Cancellation Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold mb-3 text-2xl">Shop</h3>
          <ul className="space-y-2 text-2xl">
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Muesli</a></li>
            <li><a href="#">Granola Bars</a></li>
            <li><a href="#">Seed Mixes</a></li>
            <li><a href="#">Gift Boxes</a></li>
            <li><a href="#">Super Savers</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3 text-2xl">Contact</h3>
          <p className="flex items-center gap-2 text-2xl"><FaMapMarkerAlt /> No.45, anna salai, T. nagar, chennai - 600 017</p>
          <p className="flex items-center gap-2 text-2xl"><FaEnvelope /> info@cherii.com</p>
          <p className="flex items-center gap-2 text-2xl"><FaPhone /> +123 456 7890</p>

          <h3 className="font-bold mt-4 mb-2 text-2xl">Follow us</h3>
          <div className="flex gap-4 text-3xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
