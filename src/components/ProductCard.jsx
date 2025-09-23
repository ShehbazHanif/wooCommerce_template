// src/components/ProductCard.jsx

import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-yellow-500 mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="grid gap-4 bg-white p-4 text-center rounded shadow-lg border border-gray-200">
      <div className="bg-black relative aspect-square">
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="font-semibold text-gray-800">{product.title}</h3>

      <StarRating rating={product.rating} />
      <div className="text-sm text-gray-600">
        {product.originalPrice ? (
          <>
            <span className="line-through mr-1">{product.originalPrice}</span>
            <span className="font-bold text-red-500">{product.salePrice}</span>
          </>
        ) : (
          `RS${product.salePrice}`
        )}{" "}
      </div>
      <p className="text-xs text-gray-500">{product.description}</p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-600 transition-colors">
        Add to cart
      </button>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-600 transition-colors"
        onClick={handleReadMoreClick}>
        Read More
      </button>
    </div>
  );
};

export default ProductCard;
