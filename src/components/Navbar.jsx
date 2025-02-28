import React from "react";

const Navbar = ({ name }) => {
  return (
    <nav className="bg-[#DCF3F4] text-black flex items-center justify-between px-8 h-[80px] shadow-lg">
      {/* Brand Name */}
      <span className="text-2xl font-bold">{name} Portfolio</span>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
