import React, { useState } from "react";
import { Link } from "react-router-dom";
import igcc from "../assets/images/igcc.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-black font-semibold px-6 py-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex flex-row gap-2 items-center">
          <div className="w-24 h-20 md:w-20 md:h-20 rounded-full flex items-center justify-center">
            <img src={igcc} alt="IGCC Logo" />
          </div>
          <p className="w-32 md:w-40 text-sm md:text-base text-[#169b62] font-semibold leading-tight">
            Ireland-Ghana Chamber Commerce
          </p>
        </div>

        {/* Desktop Navigation with Register Button */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex space-x-6 text-[18px]">
            <Link
              to="/"
              className="hover:underline hover:text-[#169b62] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:underline hover:text-[#169b62] transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:underline hover:text-[#169b62] transition-colors"
            >
              Services
            </Link>
            <Link
              to="/mandate"
              className="hover:underline hover:text-[#169b62] transition-colors"
            >
              Mandate
            </Link>
          </nav>

          {/* Register Button */}
          <Link
            to="/member"
            className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors shadow-md"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-600 hover:text-[#169b62] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 flex flex-col space-y-3 text-[16px] border-t border-gray-200 pt-4">
          <Link
            to="/"
            className="hover:text-[#169b62] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#169b62] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-[#169b62] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/mandate"
            className="hover:text-[#169b62] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Mandate
          </Link>
          <Link
            to="/member"
            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
