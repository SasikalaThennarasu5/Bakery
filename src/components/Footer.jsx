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
          <img src={logofoot} alt="Cherii Logo" className="h-[136px] mb-3" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3 text-2xl md:text-3xl">Quick Links</h3>
          <ul className="space-y-2 font-medium text-lg md:text-xl">
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund & Cancellation Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold mb-3 text-2xl md:text-3xl">Shop</h3>
          <ul className="space-y-2 font-medium text-lg md:text-xl">
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
          <h3 className="font-bold mb-3 text-2xl md:text-3xl">Contact</h3>
          <p className="flex items-start gap-2 font-medium text-lg md:text-xl">
            <FaMapMarkerAlt className="mt-1" /> 
            No.45, Anna Salai, T. Nagar, Chennai - 600 017
          </p>
          <p className="flex items-center gap-2 font-medium text-lg md:text-xl mt-2">
            <FaEnvelope /> info@cherii.com
          </p>
          <p className="flex items-center gap-2 font-medium text-lg md:text-xl mt-2">
            <FaPhone /> +123 456 7890
          </p>

          <h3 className="font-bold mt-6 mb-2 text-2xl md:text-3xl">Follow us</h3>
          <div className="flex gap-4 text-2xl md:text-3xl">
            <a 
              href="https://www.instagram.com/cherii" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/company/cherii" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://www.facebook.com/cherii" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.youtube.com/@cherii" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-gray-800 text-sm md:text-base">
        © {new Date().getFullYear()} <span className="font-bold">Cherii</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
