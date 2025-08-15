import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cakeImg from "../assets/images/login-image.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    navigate("/home");
  };

  return (
    <div
      className="w-full min-h-screen bg-[#FFF8F0] font-league flex flex-col items-center px-4 md:px-10 lg:px-20 pt-10 md:pt-16"
      style={{ fontFamily: "'League Spartan', sans-serif" }}
    >
      {/* Tabs */}
      <div className="w-full flex shadow-sm">
        {/* Login Tab */}
        <div
          className="flex-1 flex items-center justify-center bg-[#e57f35] text-white font-bold text-lg md:text-3xl py-4 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          <span className="mr-2">➔</span> Login
        </div>
        {/* Register Tab */}
        <div
          className="flex-1 flex items-center justify-center bg-[#F3E5AB] text-[#e57f35] font-bold text-lg md:text-3xl py-4 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          <span className="mr-2">👤</span> Register
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-[#FFF8F0] mt-10 gap-8">
        {/* Left Form */}
        <div className="flex-1 w-full p-6 md:p-10">
          {/* Email */}
          <label className="block mb-2 font-semibold text-xl">E-Mail</label>
          <input
            type="email"
            placeholder="Enter Your E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-red-300 rounded-md text-lg px-4 py-2 mb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
          />
          {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

          {/* Password */}
          <label className="block mb-2 font-semibold text-xl">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-red-300 rounded-md text-lg px-4 py-2 mb-6 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#fccf03] text-white font-bold text-2xl py-3 rounded-full hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Links */}
          <p className="text-[#e57f35] text-lg mt-4 cursor-pointer">
            Lost Your Password?
          </p>
          <p className="font-bold text-lg mt-2">
            Don’t Have An Account?{" "}
            <span
              className="text-[#e57f35] cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center p-6">
          <img
            src={cakeImg}
            alt="Chocolate Cake"
            className="w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
