import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CheckOut from "./pages/CheckOut";
import Login from "./pages/Login";
import Product from "./pages/Product";
import NewOrder from "./components/NewOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/email" element={<NewOrder />} />
        <Route path="/newOrder" element={<NewOrder />} />
        <Route path="/newOrder" element={<NewOrder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
