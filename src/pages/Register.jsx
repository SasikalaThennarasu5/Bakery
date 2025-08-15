import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cakeImg from "../assets/images/login-image.png";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // ✅ Email must be Gmail, Yahoo, or Hotmail
  const validateEmail = (email) => {
    const approvedDomains = ["gmail.com", "yahoo.com", "hotmail.com"];
    const match = email.match(/^[^\s@]+@([^\s@]+\.[^\s@]+)$/);
    if (!match) return false;
    return approvedDomains.includes(match[1].toLowerCase());
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
      setEmailError("Only Gmail, Yahoo, or Hotmail emails are allowed");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setEmailError("");
    setPasswordError("");
    navigate("/login");
  };

  return (
    <div
      className="w-full min-h-screen bg-[#FFF8F0] font-league flex flex-col items-center px-4 md:px-10 lg:px-20 pt-10 md:pt-16"
      style={{ fontFamily: "'League Spartan', sans-serif" }}
    >
      {/* Tabs */}
      <div className="w-full flex shadow-sm">
        <div
          className="flex-1 flex items-center justify-center bg-[#F3E5AB] text-[#e57f35] font-bold text-lg md:text-3xl py-4 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </div>
        <div
          className="flex-1 flex items-center justify-center bg-[#e57f35] text-white font-bold text-lg md:text-3xl py-4 cursor-pointer"
        >
          Register
        </div>
      </div>

      {/* Content - Swapped order for Register */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-[#FFF8F0] mt-10 gap-8">
        {/* Left Image */}
        <div className="flex-1 flex justify-center items-center p-6">
          <img
            src={cakeImg}
            alt="Chocolate Cake"
            className="w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full p-6 md:p-10">
          <label className="block mb-2 font-semibold text-xl">E-Mail</label>
          <input
            type="email"
            placeholder="Enter Your E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-red-300 rounded-md text-lg px-4 py-2 mb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
          />
          {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

          <label className="block mb-2 font-semibold text-xl">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-red-300 rounded-md text-lg px-4 py-2 mb-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
          />

          <label className="block mb-2 font-semibold text-xl">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Re-enter Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-red-300 rounded-md text-lg px-4 py-2 mb-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
          />

          {/* First & Last Name side by side on desktop */}
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-xl">First Name</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-red-300 rounded-md text-lg px-4 py-2 mb-4 md:mb-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-xl">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-red-300 rounded-md text-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e57f35]"
              />
            </div>
          </div>

          {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}

          <button
            onClick={handleRegister}
            className="w-full bg-[#fccf03] text-white font-bold text-2xl py-3 rounded-full hover:opacity-90 transition mt-6"
          >
            Register
          </button>

          <p className="font-bold text-lg mt-4">
            Already Have An Account?{" "}
            <span
              className="text-[#e57f35] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
