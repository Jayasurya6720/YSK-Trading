import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industrial-Special-Product.css";

import makegrindingwheel from "../Assert/Abrasive/4_make-grinding-wheel.png";
import cumigrindingdisc from "../Assert/Abrasive/7_cumi-grinding-disc.jpg";
import cfwhee from "../Assert/Abrasive/14_-c_f-whee.jpg";
import Alkonclothsandingroll from "../Assert/Abrasive/Alkon-cloth-sanding-roll.png";
import benchgrindingwheel from "../Assert/Abrasive/bench-grinding-wheel.png";
import cubbrush from "../Assert/Abrasive/cub-brush.png";
import Cutoffwheel from "../Assert/Abrasive/Cut-off-wheel.png";
import flapdisc from "../Assert/Abrasive/flap-disc.png";
import Liondrysandingsheet from "../Assert/Abrasive/Lion-dry-sanding-sheet.png";
import mattwheel from "../Assert/Abrasive/matt-wheel.png";
import Silkonwidesandingbelt from "../Assert/Abrasive/Silkon-wide-sanding-belt .png";
import Tctblade from "../Assert/Abrasive/Tct-blade.png";
import Ultrathincuttingwheel from "../Assert/Abrasive/Ultra-thin-cutting-wheel.png";
import Velcrosandingdisc from "../Assert/Abrasive/Velcro-sanding-disc.png";
import wallcuttingblade from "../Assert/Abrasive/wall-cutting-blade.jpg";






import boschlogo from "../Assert/Abrasive Logo/bosch-logo.png";
import cumilogo from "../Assert/Abrasive Logo/cumi-logo.png";
import hitachilogo from "../Assert/Abrasive Logo/hitachi-logo.png";
import nortonsaintgobainlogo from "../Assert/Abrasive Logo/norton-saint-gobain-logo.png";

const products = [
  { name: "4 Make Grinding Wheel", image: makegrindingwheel },
  { name: "7 Cumi Grinding Disc", image: cumigrindingdisc },
  { name: "14_-c_f-whee", image: cfwhee},
  { name: "Alkonclothsandingroll", image: Alkonclothsandingroll},
  { name: "Bench Grinding Wheel", image: benchgrindingwheel },
  { name: "Cub Brush", image: cubbrush },
  { name: "Cut Off Wheel", image: Cutoffwheel },
  { name: "flap Disc", image: flapdisc },
  { name: "Lion Dry Sanding Sheet", image: Liondrysandingsheet },
  { name: "Matt Wheel", image: mattwheel },
  { name: "Silkon Wide Sanding Belt", image: Silkonwidesandingbelt },
  { name: "Tct Blade", image: Tctblade },
  { name: "Ultra Thin Cutting Wheel", image: Ultrathincuttingwheel },
  { name: "Velcro Sanding Disc", image: Velcrosandingdisc },
  { name: "Wall Cutting Blade", image: wallcuttingblade },
  


  
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

      <h3 className="brands-title">Our Dealers:</h3>
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
