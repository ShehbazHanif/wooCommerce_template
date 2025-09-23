import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/Login";
import Product from "./pages/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
