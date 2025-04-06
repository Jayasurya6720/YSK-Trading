import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industrial-Special-Product.css";

import cumigrindingdisc from "../Assert/Abrasive/7_cumi-grinding-disc.jpg";
import Alkonclothsandingroll from "../Assert/Abrasive/Alkon-cloth-sanding-roll.png";
import benchgrindingwheel from "../Assert/Abrasive/bench-grinding-wheel.png";
import cubbrush from "../Assert/Abrasive/cub-brush.png";
import Cutoffwheel from "../Assert/Abrasive/Cut-off-wheel.png";
import flapdisc from "../Assert/Abrasive/flap-disc.png";
import Liondrysandingsheet from "../Assert/Abrasive/Lion-dry-sanding-sheet.png";
import mattwheel from "../Assert/Abrasive/matt-wheel.png";
import Silkonwidesandingbelt from "../Assert/Abrasive/Silkon-wide-sanding-belt .png";
import abrasiverolls from "../Assert/Abrasive/abrasive-rolls.png";
import cuttingwheels from "../Assert/Abrasive/cutting-wheels.jpg";
import Velcrosandingdisc from "../Assert/Abrasive/Velcro-sanding-disc.png";
import grindingwheels from "../Assert/Abrasive/grinding-wheels.png";






import boschlogo from "../Assert/Abrasive Logo/bosch-logo.png";
import cumilogo from "../Assert/Abrasive Logo/cumi-logo.png";
import hitachilogo from "../Assert/Abrasive Logo/hitachi-logo.png";
import nortonsaintgobainlogo from "../Assert/Abrasive Logo/norton-saint-gobain-logo.png";

const products = [
  { name: "Cumi Grinding Disc", image: cumigrindingdisc },
  { name: "Alkonclothsandingroll", image: Alkonclothsandingroll},
  { name: "Bench Grinding Wheel", image: benchgrindingwheel },
  { name: "Cub Brush", image: cubbrush },
  { name: "Cut Off Wheel", image: Cutoffwheel },
  { name: "flap Disc", image: flapdisc },
  { name: "Sanding Sheet", image: Liondrysandingsheet },
  { name: "Matt Wheel", image: mattwheel },
  { name: "Sanding Belt", image: Silkonwidesandingbelt },
  { name: "Abrasive Rolls", image: abrasiverolls },
  { name: "Cutting Wheels", image: cuttingwheels },
  { name: "Velcro Sanding Disc", image: Velcrosandingdisc },
  { name: "Grinding Wheels", image: grindingwheels },
  


  
];

const brands = [
  { image: boschlogo, alt: "boschlogo" },
  { image: cumilogo, alt: "cumilogo" },
  { image: hitachilogo, alt: "hitachilogo" },
  { image: nortonsaintgobainlogo, alt: "nortonsaintgobainlogo" },
];

const WeldingMachine = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i>Abrasive</h3></button>
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

export default WeldingMachine;
