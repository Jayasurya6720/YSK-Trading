import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css"; // Import the CSS file
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "./Assert/logo.png"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Description */}
        <img src={logo} alt="YSK Trading Logo" className="footer-logo" />
        <div className="footer-left">

          <p className="footer-description">
            YSK Trading has over 12 years of experience providing high-quality tools and hardware solutions.
            We specialize in power tools, hand tools, welding machines, and lifting equipment, catering to both wholesale and retail customers.
            As authorized distributors for trusted brands like Taparia, Stanley, and Janatics Pneumatic, we guarantee reliable performance for every project.
          </p>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="footer-right">
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/all-products">Products</Link></li>
            <li><Link to="/">Terms & Conditions</Link></li>
            <li><Link to="/">Refund Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Contact Details */}
      <div className="footer-bottom">
        <div className="contact-info">
          <FaMapMarkerAlt className="icon" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=19+Street,+Old+Bus+Stand,+Salem"
            target="_blank"
            rel="noopener noreferrer"
            className="location-link"
          >
            19 Street, Old Bus Stand, Salem.
          </a>
        </div>
        <div className="contact-info">
          <FaPhoneAlt className="icon" />
          <a href="tel:+911234567890" className="phone-link">+91 1234567890</a>
        </div>
        <div className="contact-info">
          <FaEnvelope className="icon" />
          <a href="mailto:ysktrading@gmail.com" className="email-link">ysktrading@gmail.com</a>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} YSK Trading. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
