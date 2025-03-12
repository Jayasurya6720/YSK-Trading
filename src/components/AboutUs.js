import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./AboutUs.css";
import welderImage from "../Assert/wedding.jfif"; // Ensure correct image path

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="about-container">
      <h2 className="about-title">Our Company</h2>
      <div className="about-content">
        <div className="about-card">
          <p>
            Welcome to <strong>YSK Trading</strong>, your trusted partner in tools and hardware solutions for over 
            <strong> 12 years</strong>. We are dedicated to providing high-quality products tailored to meet the 
            needs of professionals and enthusiasts alike.
          </p>
          <p>
            Our product range includes power tools, hand tools, welding machines, lifting equipment, and general hardware.
            As authorized distributors for top brands like <strong>Taparia, Stanley,</strong> and 
            <strong> Janatics Pneumatic</strong>, we ensure reliability and performance in every product we offer.
          </p>
          <p>
            At YSK Trading, we cater to both wholesale and retail customers, upholding the highest standards of quality.
            Our mission is to empower individuals and businesses with the tools they need to build, create, and innovate.
          </p>
          <button className="know-more-btn" onClick={() => navigate("/about")}>
            Know more...
          </button>
        </div>
        <div className="about-image">
          <img src={welderImage} alt="Welder Working" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
