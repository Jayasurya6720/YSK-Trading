import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeldingMachine.css";

import cuttingtorch from "../Assert/gas accessories/cutting-torch.png";
import flashbackarrestor from "../Assert/gas accessories/flashback-arrestor.jpg";
import gashose from "../Assert/gas accessories/gas-hose.png";
import heatingtorch from "../Assert/gas accessories/heating-torch.png";
import nazzles from "../Assert/gas accessories/nazzles.jpeg";
import pugmachine from "../Assert/gas accessories/pug-machine.png";
import weldingregulator from "../Assert/gas accessories/welding-regulator.png";
import weldingtorch from "../Assert/gas accessories/welding-torch.png";



import toshonlogo from "../Assert/welding meachine logo/toshon-logo.png";


const products = [
  { name: "Cutting Torch", image: cuttingtorch },
  { name: "Flashback Arrestor", image: flashbackarrestor },
  { name: "Gas Hose", image: gashose },
  { name: "Heating Torch", image: heatingtorch },
  { name: "Nazzles", image: nazzles },
  { name: "Pug Machine", image: pugmachine },
  { name: "Welding Regulator", image: weldingregulator },
  { name: "Welding Torch", image: weldingtorch },

  
];

const brands = [
  { image: toshonlogo, alt: "toshonlogo" },
 
];

const WeldingMachine = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i> Gas Accessories</h3></button>
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
