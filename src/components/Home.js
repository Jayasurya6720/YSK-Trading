import React from "react";
import "./Home.css";
import AboutUs from "./AboutUs";
import Products from "./Products";

import EnquiryForm from "./EnquiryForm";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>
            Tools You Trust, <br />
            Excellence You <span className="highlight">Deserve.</span>
          </h1>
          <p>
            Your one-stop solution for premium tools and hardware. With 12+ years of
            expertise, we bring you top brands like Taparia, Stanley, and Janatics
            Pneumatic. From power tools to welding machines, we empower
            professionals and enthusiasts to create, innovate, and succeed.
          </p>
          <button className="explore-btn">Explore Our Products</button>
        </div>
      </header>

      {/* About Us Section */}
      <AboutUs />

      {/* Products Section */}
      <Products />

      <EnquiryForm />

      
    </div>
  );
};

export default Home;  // ✅ Corrected placement
