import React from "react";
import { useNavigate } from "react-router-dom";
import "./Safety.css";

import cottonglove from "../Assert/Safety equipements/cotton-glove.png";
import dangertape from "../Assert/Safety equipements/danger-tape.jpg";
import dustmask from "../Assert/Safety equipements/dust-mask.png";
import earplug from "../Assert/Safety equipements/ear-plug.png";
import rubberglove from "../Assert/Safety equipements/rubber-glove.jpg";
import safetybelt from "../Assert/Safety equipements/safety-belt.png";
import safetyboot from "../Assert/Safety equipements/safety-boot.png";
import safetycone from "../Assert/Safety equipements/safety-cone.png";
import safetyglasses from "../Assert/Safety equipements/safety-glasses.jpg";
import safetyhelmet from "../Assert/Safety equipements/safety-helmet.png";
import safetyjacket from "../Assert/Safety equipements/safety-jacket.png";
import safetyshoes from "../Assert/Safety equipements/safety-shoes.png";




import mlogo from "../Assert/Safety Logo/3m-logo.png";
import hillsonlogo from "../Assert/Safety Logo/hillson-logo.png";
import karamlogo from "../Assert/Safety Logo/karam-logo.png";
import stanlylogo from "../Assert/Safety Logo/stanly-logo.png";

const products = [
  { name: "Cotton Glove", image: cottonglove },
  { name: "Danger Tape", image: dangertape },
  { name: "Dust Mask", image: dustmask},
  { name: "Ear Plug", image: earplug },
  { name: "Rubber Glove", image: rubberglove },
  { name: "Safety Belt", image: safetybelt },
  { name: "Safety Boot", image: safetyboot },
  { name: "Safety Cone", image: safetycone },
  { name: "Safety Glasses", image: safetyglasses },
  { name: "Safety Helmet", image: safetyhelmet },
  { name: "Safety Jacket", image: safetyjacket },
  { name: "Safety Shoes", image: safetyshoes},


];

const brands = [
  { image: mlogo, alt: "mlogo" },
  { image: hillsonlogo, alt: "hillsonlogo" },
  { image: karamlogo, alt: "karamlogo" },
  { image: stanlylogo, alt: "stanlylogo" },
];

const Safety = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i> Safety Tools</h3></button>
      <p className="description">
        Reliable and durable, our hand tools are designed for precision and ease of use. 
        From wrenches to screwdrivers, pliers to hammers, we provide high-quality tools 
        that ensure efficiency and accuracy in every task. Built to last, our hand tools 
        help professionals and DIY enthusiasts get the job done effortlessly.
      </p>

      <div className="tools-grid">
        {products.map((product, index) => (
          <div key={index} className="tool-card">
            <img src={product.image} alt={product.name} className="tool-image" />
            <h3 className="tool-name">{product.name}</h3>
          </div>
        ))}
      </div>

      <h3 className="brands-title">We Deals:</h3>
      <div className="brands-container">
        {brands.map((brand, index) => (
          <img key={index} src={brand.image} alt={brand.alt} className="brand-logo" />
        ))}
      </div>

      <div className="buttons-container">
        <button className="back-btn1" onClick={() => navigate(-1)}>Back</button>
        <button className="contact-btn" onClick={() => navigate("/enquiry")}>Contact Us</button>
      </div>
    </div>
  );
};

export default Safety;
