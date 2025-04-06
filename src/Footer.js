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
            <li><Link to="/products">Products</Link></li>
            {/* <li><Link to="/termsconditions">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Section - Contact Details */}
      <div className="footer-bottom">
        <div className="contact-info">
          <FaMapMarkerAlt className="icon" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=6G+GSS+Complex+DADHUBAI+KUTTAI,+DD+Rd,+Tamil+Nadu+636001"
            target="_blank"
            rel="noopener noreferrer"
            className="location-link"
          >
            YSK Trading, Tamil Nadu 636001
            </a>
        </div>
        <div className="contact-info">
          <FaPhoneAlt className="icon" />
          <a href="tel:+911234567890" className="phone-link">+91 9944201158</a>
        </div>
        <div className="contact-info">
          <FaEnvelope className="icon" />
          <a href="mailto:ysktrading@gmail.com" className="email-link">ysktradingslm@gmail.com</a>
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
