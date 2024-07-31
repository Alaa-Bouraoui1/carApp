// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Newsroom from "./pages/Newsroom";
import Career from "./pages/Career";
import B2B from "./pages/B2B";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/career" element={<Career />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
