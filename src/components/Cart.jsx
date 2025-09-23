import React from "react";
import ProductCard from "./ProductCard";

const cartItems = [
  {
    id: 1,
    title: "Product Title",
    price: 100,
    image: "/path/to/product-image.png",
    quantity: 1,
    hasRating: false,
  },
  {
    id: 2,
    title: "Product Title With Rating",
    price: 100,
    image: "/path/to/product-image.png",
    quantity: 1,
    hasRating: true,
    rating: 4,
  },
  {
    id: 3,
    title: "On Sale Product",
    price: 200,
    salePrice: 100,
    image: "/path/to/product-image.png",
    quantity: 1,
    isSale: true,
  },
];

const relatedProducts = [
  {
    id: 4,
    title: "Product Title",
    price: 100,
    image: "/path/to/related-product1.png",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 5,
    title: "Product Title",
    price: 100,
    image: "/path/to/related-product2.png",
    description: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 6,
    title: "Product Title",
    price: 200,
    salePrice: 100,
    image: "/path/to/related-product3.png",
    description: "Lorem ipsum dolor sit amet...",
    isSale: true,
  },
];

const Cart = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">WooCommerce Cart Block</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <div className="w-16 h-16 bg-black mr-4"></div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">R{item.price}</p>
              </div>
              <span className="font-semibold">
                R{item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="bg-gray-100 p-6 rounded-md">
            <h3 className="font-semibold text-lg mb-4">Basket Total</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R300.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-sm">R0.00</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-300 mt-4 pt-4">
              <span>Total</span>
              <span>R300.00</span>
            </div>
            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded w-full mt-4 hover:bg-orange-600">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You may be interested in...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
