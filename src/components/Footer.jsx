import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaRss,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Get Started with LSX</h2>
            <p className="text-gray-400 text-sm mb-4">
              With its clean, minimal design and powerful feature set, LSX theme
              enables agencies to build stylish and sophisticated WordPress
              websites.
            </p>
            <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded hover:bg-blue-600 transition-colors">
              View Demo
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Theme</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>
                <a href="#">Styles</a>
              </li>
              <li>
                <a href="#">Patterns</a>
              </li>
              <li>
                <a href="#">Layouts</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">LightSpeed</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>
                <a href="#">Solutions</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© LSX Theme</p>
          <div className="space-x-4 my-4 md:my-0">
            <a href="#">Privacy Policy</a>
            <span className="hidden md:inline">·</span>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="flex space-x-4">
            <FaFacebook className="text-lg hover:text-white cursor-pointer" />
            <FaInstagram className="text-lg hover:text-white cursor-pointer" />
            <FaTwitter className="text-lg hover:text-white cursor-pointer" />
            <FaLinkedin className="text-lg hover:text-white cursor-pointer" />
            <FaRss className="text-lg hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
