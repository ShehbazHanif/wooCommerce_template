import React from "react";

const HeroBanner = ({ title, description, buttonText }) => {
  return (
    <section className="bg-gray-800 text-white py-24 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
