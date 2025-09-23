// src/pages/Product.jsx

import React, { useState } from "react";
import { FaStar, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import products from "../mockData/mockData";
const Card = ({ title, content, author, date, rating, image, type }) => {
  const renderContent = () => {
    switch (type) {
      case "review":
        return (
          <div className="flex items-start space-x-4 border-b border-gray-200 py-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary-300">
                <img
                  src={image}
                  alt={author}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800">{author}</h4>
                  <p className="text-xs text-gray-500">{date}</p>
                </div>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < rating ? "text-yellow-500" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">{content}</p>
            </div>
          </div>
        );

      case "description":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{content}</p>
          </div>
        );

      case "additional-details":
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>

            <p className="text-sm text-gray-600">{content}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="p-4">{renderContent()}</div>;
};

const Product = () => {
  const [activeTab, setActiveTab] = useState("description");

  const { productId } = useParams();

  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="text-center p-8">
        <Header />
        <h1 className="text-3xl font-bold">Product not found.</h1>
        <p>The product you are looking for does not exist.</p>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <div className="text-sm text-gray-500 mb-6">
          <a href="#" className="hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <a href="#" className="hover:underline">
            Products
          </a>{" "}
          &gt; <span className="font-semibold">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            {product.originalPrice && (
              <span className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
            )}
            <div className="bg-black aspect-square flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < product.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews.length} customer reviewed)
              </span>
            </div>

            <div className="text-xl mb-4">
              <span className="line-through text-gray-500 mr-2">
                {product.originalPrice}
              </span>
              <span className="font-bold text-red-500">
                {product.salePrice}
              </span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="flex items-center space-x-4 mb-6">
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="w-20 border rounded-md p-2 text-center"
              />
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Add to basket
              </button>
            </div>

            <div className="text-sm text-gray-600 space-y-2 mb-6">
              <p>
                <strong>SKU:</strong> product-sku
              </p>
              <p>
                <strong>Categories:</strong>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Product Category
                </a>
              </p>
              <p>
                <strong>Tag:</strong>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Product Tag
                </a>
              </p>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 text-gray-600 text-2xl">
              <span className="text-sm font-semibold">Share:</span>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 mb-6">
          <nav className="flex space-x-4">
            <button
              className={`py-2 px-4 border-b-2 font-semibold text-gray-600 transition-colors ${
                activeTab === "description"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("description")}>
              Description
            </button>
            <button
              className={`py-2 px-4 border-b-2 font-semibold text-gray-600 transition-colors ${
                activeTab === "details"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("details")}>
              Additional Details
            </button>
            <button
              className={`py-2 px-4 border-b-2 font-semibold text-gray-600 transition-colors ${
                activeTab === "reviews"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("reviews")}>
              Reviews ({product.reviews.length})
            </button>
          </nav>
        </div>

        <div className="bg-white p-6 rounded-md shadow-lg border border-gray-200">
          {activeTab === "description" && (
            <Card
              title="Product Description"
              content={product.description}
              type="description"
            />
          )}
          {activeTab === "details" && (
            <Card
              title="Additional Details"
              content={product.additionalDetails}
              type="additional-details"
            />
          )}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-xl font-bold mb-4">
                {product.reviews.length} reviews for {product.title}
              </h2>
              {product.reviews.map((review) => (
                <Card
                  key={review.id}
                  {...review}
                  content={review.text}
                  type="review"
                />
              ))}

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Add a review</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Your email address will not be published. Required fields are
                  marked <span className="text-red-500">*</span>
                </p>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Your rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="cursor-pointer" />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="review"
                    className="block text-sm font-medium text-gray-700">
                    Your review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="review"
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
