import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaSearch, FaHeart, FaBell, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import logohead from "../assets/images/logohead.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `hover:text-yellow-100 transition-all ${
      isActive ? "border-b-2 border-black" : ""
    }`;

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#D99A6C] shadow-md font-spartan">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Row 1: Logo - Menu - Icons */}
        <div className="flex items-center justify-between py-1"> {/* smaller padding */}
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logohead} alt="Cherii Logo" className="h-16 w-auto" /> {/* smaller height */}
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex gap-6 text-black text-xl font-medium">
            <NavLink to="/" className={navLinkClasses}>HOME</NavLink>
            <NavLink to="/about" className={navLinkClasses}>ABOUT US</NavLink>
            <NavLink to="/products" className={navLinkClasses}>OUR PRODUCTS</NavLink>
            <NavLink to="/blog" className={navLinkClasses}>BLOG</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>CONTACT US</NavLink>
          </nav>

          {/* Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-3 text-xl">
            <Link to="/wishlist"><FaHeart className="cursor-pointer hover:text-yellow-100" /></Link>
            <FaBell className="cursor-pointer hover:text-yellow-100" />
            <Link to="/cart"><FaShoppingBag className="cursor-pointer hover:text-yellow-100" /></Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Row 2: Search Bar & Login */}
        <div className="hidden md:flex items-center justify-between pb-2">
          <div className="w-[200px]"></div>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-full shadow-md px-3 w-[450px] h-[34px]">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="SEARCH HERE"
              className="ml-2 w-full outline-none text-base"
            />
          </div>

          {/* Login Button */}
          <Link to="/login">
            <button className="bg-yellow-400 px-6 py-1 font-bold hover:bg-yellow-300 rounded-full">
              LOGIN
            </button>
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4 bg-[#D99A6C]">
            <NavLink to="/" className={navLinkClasses} onClick={() => setMenuOpen(false)}>HOME</NavLink>
            <NavLink to="/about" className={navLinkClasses} onClick={() => setMenuOpen(false)}>ABOUT US</NavLink>
            <NavLink to="/products" className={navLinkClasses} onClick={() => setMenuOpen(false)}>OUR PRODUCTS</NavLink>
            <NavLink to="/cakes" className={navLinkClasses} onClick={() => setMenuOpen(false)}>CAKES</NavLink>
            <NavLink to="/wishlist" className={navLinkClasses} onClick={() => setMenuOpen(false)}>WISHLIST</NavLink>
            <NavLink to="/cart" className={navLinkClasses} onClick={() => setMenuOpen(false)}>CART</NavLink>
            <NavLink to="/payments" className={navLinkClasses} onClick={() => setMenuOpen(false)}>PAYMENTS</NavLink>
            <NavLink to="/blog" className={navLinkClasses} onClick={() => setMenuOpen(false)}>BLOG</NavLink>
            <NavLink to="/contact" className={navLinkClasses} onClick={() => setMenuOpen(false)}>CONTACT US</NavLink>

            {/* Mobile Icons */}
            <div className="flex gap-4 px-4 mt-2 text-xl">
              <Link to="/wishlist"><FaHeart className="cursor-pointer hover:text-yellow-100" /></Link>
              <FaBell className="cursor-pointer hover:text-yellow-100" />
              <Link to="/cart"><FaShoppingBag className="cursor-pointer hover:text-yellow-100" /></Link>
            </div>

            {/* Mobile Search */}
            <div className="flex items-center bg-white rounded-full shadow-md px-3 w-[90%] mx-auto h-[34px] mt-3">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="SEARCH HERE"
                className="ml-2 w-full outline-none text-sm"
              />
            </div>

            {/* Mobile Login Button */}
            <Link to="/login">
              <button className="bg-yellow-400 px-6 py-1 rounded-full font-bold hover:bg-yellow-300 mt-3 mx-auto">
                LOGIN
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
