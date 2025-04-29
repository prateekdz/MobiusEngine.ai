import React from "react";
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Mobius Logo" className="h-6" />
        <span className="font-semibold text-sm tracking-widest">MOBIUS</span>
      </div>

  
      <ul className="flex space-x-6 text-sm font-medium">
        <li className="text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About Us</li>
        <li className="hover:text-blue-600 cursor-pointer">Plans</li>
        <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
        <li className="hover:text-blue-600 cursor-pointer">More</li>
      </ul>

      <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-blue-700">
        Sign up
      </button>
    </nav>
  );
};

export default Navbar;
