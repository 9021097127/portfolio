import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#DCF3F4] text-black flex items-center justify-between px-4 md:px-8 h-[80px] shadow-lg">
      <span className="text-2xl font-bold">Kiran's Portfolio</span>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li>
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#DCF3F4] shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="hover:text-gray-400" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-400"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-400"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
