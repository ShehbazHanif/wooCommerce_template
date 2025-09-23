import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/logo.png"
            alt="LSX Design Logo"
            className="h-8"
          />
          <span className="font-semibold text-lg">LSX Design</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            FAQ
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-6">
          <span className="text-sm hidden md:block">R100.00</span>
          <Link to="/check">
            <FaShoppingCart className="text-xl hover:text-gray-400 cursor-pointer" />
          </Link>
          <Link to="/login">
            <FaUser className="text-xl hover:text-gray-400 cursor-pointer" />
          </Link>

          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4 space-y-4">
          <a href="#" className="block hover:text-gray-400">
            Shop
          </a>
          <a href="#" className="block hover:text-gray-400">
            Services
          </a>
          <a href="#" className="block hover:text-gray-400">
            FAQ
          </a>
          <a href="#" className="block hover:text-gray-400">
            About
          </a>
          <a href="#" className="block hover:text-gray-400">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
