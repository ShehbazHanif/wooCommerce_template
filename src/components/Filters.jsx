import React from "react";
import { FaStar } from "react-icons/fa";

const StarRatingFilter = ({ rating }) => {
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const Filters = () => {
  return (
    <div className="p-4 bg-white rounded shadow-lg border border-gray-200">
      <h3 className="font-semibold text-sm mb-2">Active filters</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="bg-gray-200 text-xs px-2 py-1 rounded-full flex items-center">
          In stock <span className="ml-1 text-gray-500">x</span>
        </span>
        <span className="bg-gray-200 text-xs px-2 py-1 rounded-full flex items-center">
          1 site <span className="ml-1 text-gray-500">x</span>
        </span>
        <button className="text-blue-500 text-xs font-semibold hover:underline">
          Clear All
        </button>
      </div>

      <h3 className="font-semibold mb-2">Filter by price</h3>
      <div className="relative mb-6">
        <input
          type="range"
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>R150</span>
          <span>R350</span>
        </div>
        <button className="text-blue-500 text-xs font-semibold hover:underline mt-1">
          Reset
        </button>
      </div>

      <h3 className="font-semibold mb-2">Filter by stock status</h3>
      <div className="space-y-1 mb-6">
        <label className="flex items-center text-sm text-gray-700">
          <input type="checkbox" className="mr-2" /> In stock{" "}
          <span className="text-gray-500 ml-auto">(1)</span>
        </label>
        <label className="flex items-center text-sm text-gray-700">
          <input type="checkbox" className="mr-2" /> On backorder{" "}
          <span className="text-gray-500 ml-auto">(1)</span>
        </label>
        <label className="flex items-center text-sm text-gray-700">
          <input type="checkbox" className="mr-2" /> Out of stock{" "}
          <span className="text-gray-500 ml-auto">(1)</span>
        </label>
        <button className="text-blue-500 text-xs font-semibold hover:underline mt-1">
          Reset
        </button>
      </div>

      <h3 className="font-semibold mb-2">Filter by attribute</h3>
      <div className="space-y-1 mb-6">
        <label className="flex items-center text-sm text-gray-700">
          <input type="checkbox" className="mr-2" /> 1 site{" "}
          <span className="text-gray-500 ml-auto">(1)</span>
        </label>
        <label className="flex items-center text-sm text-gray-700">
          <input type="checkbox" className="mr-2" /> 10 sites{" "}
          <span className="text-gray-500 ml-auto">(1)</span>
        </label>
        <label className="flex items-center text-sm text-gray-700">
          <input type="checkbox" className="mr-2" /> 5 sites{" "}
          <span className="text-gray-500 ml-auto">(1)</span>
        </label>
        <button className="text-blue-500 text-xs font-semibold hover:underline mt-1">
          Reset
        </button>
      </div>

      <h3 className="font-semibold mb-2">Filter by rating</h3>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <label
            key={rating}
            className="flex items-center text-sm text-gray-700">
            <input type="checkbox" className="mr-2" />
            <StarRatingFilter rating={rating} />
            <span className="text-gray-500 ml-auto">(1)</span>
          </label>
        ))}
        <button className="text-blue-500 text-xs font-semibold hover:underline mt-1">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filters;
