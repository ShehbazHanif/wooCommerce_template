import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const CheckOut = () => {
  const cartItems = [
    {
      id: 1,
      title: "LSX Mega Menus",
      price: 100,
      image: "/src/assets/Carpentry.jpg",
      description: "Display beautiful banners...",
    },
    {
      id: 2,
      title: "LSX Banners",
      price: 50,
      salePrice: 40,
      image: "/src/assets/decoration.jpg",
      description: "Display beautiful banners...",
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                1. Contact information
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Already have an account?{" "}
                <a href="#" className="text-blue-500">
                  Log in.
                </a>
              </p>
              <input
                type="email"
                placeholder="We'll use this email to send you details and updates about your order."
                className="w-full border rounded-md p-2"
              />
              <label className="flex items-center text-sm text-gray-700 mt-2">
                <input type="checkbox" className="mr-2" /> Create an account?
              </label>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                2. Shipping address
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Enter the address where you want your order delivered.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="col-span-1 sm:col-span-2 border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="col-span-1 sm:col-span-2 border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Country/Region"
                  className="border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Province"
                  className="border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Postal code"
                  className="border rounded-md p-2"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  className="col-span-1 sm:col-span-2 border rounded-md p-2"
                />
              </div>
              <label className="flex items-center text-sm text-gray-700 mt-2">
                <input type="checkbox" className="mr-2" /> Use same address for
                billing
              </label>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">
                3. Shipping options
              </h2>
              <div className="space-y-2">
                <label className="flex items-center justify-between text-sm text-gray-700 border rounded-md p-3">
                  <div className="flex items-center">
                    <input type="radio" name="shipping" className="mr-2" /> Free
                    shipping
                  </div>
                  <span>R0.00</span>
                </label>
                <label className="flex items-center justify-between text-sm text-gray-700 border rounded-md p-3">
                  <div className="flex items-center">
                    <input type="radio" name="shipping" className="mr-2" />{" "}
                    Local pickup
                  </div>
                  <span>R0.00</span>
                </label>
                <label className="flex items-center justify-between text-sm text-gray-700 border rounded-md p-3">
                  <div className="flex items-center">
                    <input type="radio" name="shipping" className="mr-2" /> Flat
                    rate
                  </div>
                  <span>R50.00</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">4. Payment options</h2>
              <div className="space-y-4">
                <div className="border rounded-md p-3">
                  <label className="flex items-center text-sm font-semibold">
                    <input type="radio" name="payment" className="mr-2" />{" "}
                    Direct bank transfer
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
                <label className="flex items-center border rounded-md p-3 text-sm font-semibold">
                  <input type="radio" name="payment" className="mr-2" /> Cheque
                  payments
                </label>
                <label className="flex items-center border rounded-md p-3 text-sm font-semibold">
                  <input type="radio" name="payment" className="mr-2" /> Cash on
                  delivery
                </label>
              </div>
            </div>

            <label className="flex items-center text-sm text-gray-700 mb-6">
              <input type="checkbox" className="mr-2" /> Add a note to your
              order
            </label>
            <p className="text-xs text-gray-500 mb-6">
              By proceeding with your purchase you agree to our{" "}
              <a href="#" className="text-blue-500">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex space-x-4">
              <button className="bg-white text-gray-800 border-2 border-gray-300 py-2 px-6 rounded font-semibold hover:bg-gray-100">
                ← Return to Basket
              </button>
              <button className="bg-orange-500 text-white py-2 px-6 rounded font-semibold hover:bg-orange-600">
                Place Order
              </button>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-100 p-6 rounded-md">
              <h3 className="font-semibold text-lg mb-4">Basket Total</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black mr-4">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                  <span className="ml-auto font-semibold">R{item.price}</span>
                </div>
              ))}
              <div className="border-t border-gray-300 my-4 pt-4 text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">R150.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">R50.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-300">
                  <span>Total</span>
                  <span>R200.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
