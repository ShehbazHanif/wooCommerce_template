import React from "react";
import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md border border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm my-4"
                  placeholder="Email address *"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm pr-10"
                  placeholder="Password *"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer text-gray-400 hover:text-gray-600">
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500">
                  Lost your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Log In
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Social Login and Registration
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Use a social account for faster login or easy registration
            </p>
            <div className="flex justify-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <span>Login with Facebook</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border rounded-md text-sm font-medium text-gray-700 bg-white border-gray-300 hover:bg-gray-50">
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
