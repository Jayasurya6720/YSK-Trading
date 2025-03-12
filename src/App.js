import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./components/Home"; 
import Products from "./components/Products"; 
import AboutUsPage from "./components/AboutUsPage ";
import EnquiryForm from "./components/EnquiryForm";
import Footer from "./Footer";
import logo from "./Assert/logo.png";
import AllProducts from "./components/AllProduct";
import HandTools from "./components/HandTools";  // ✅ Import HandTools component
import PowerTools from "./components/PowerTools";
import WeldingMachine from './components/WeldingMachine';

const App = () => {
  return (
    <Router>  
      <div className="container">
        {/* Navbar Section */}
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>  
            <li><Link to="/about">About</Link></li>  {/* ✅ Ensure this works */}
            <li><Link to="/products">Categories</Link></li>
            <li><Link to="/enquiry">Contact</Link></li>
          </ul>
          <Link to="/enquiry">
            <button className="enquiry-btn">For Enquiries</button>
          </Link>
        </nav>

        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} /> {/* ✅ Add AboutUsPage Route */}
          <Route path="/products" element={<Products />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/handtools" element={<HandTools />} />  {/* ✅ Add this route */}
          <Route path="/hard-tools" element={<PowerTools />} />  {/* ✅ Add this route */}
          <Route path="/welding-machine" element={<WeldingMachine />} />  {/* ✅ Add this route */}

       
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
