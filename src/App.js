import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Products from "./components/Products";
import AboutUsPage from "./components/AboutUsPage ";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./Footer";
import logo from "./Assert/logo.png";
import AllProducts from "./components/AllProduct";
import HandTools from "./components/HandTools";
import PowerTools from "./components/PowerTools";
import WeldingMachine from "./components/WeldingMachine";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        {/* Navbar Section */}
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          {/* Hamburger Menu Button */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          {/* Navigation Links - Show normally on desktop, dropdown on mobile */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/all-products" onClick={() => setMenuOpen(false)}>Categories</Link></li>
            <li className="enquiry-btn2"><Link to="/enquiry" onClick={() => setMenuOpen(false)}>Contact</Link></li>
           
          </ul>

          <Link to="/enquiry">
            <button className="enquiry-btn">For Enquiries</button>
          </Link>
        </nav>

        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/handtools" element={<HandTools />} />
          <Route path="/hard-tools" element={<PowerTools />} />
          <Route path="/welding-machine" element={<WeldingMachine />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;