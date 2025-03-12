import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeldingMachine.css";

import wrenches from "../Assert/wrenches.png";
import hammers from "../Assert/hammers.jfif";
import screwdrivers from "../Assert/screwdrivers.jfif";
import pliers from "../Assert/pliers.png";
import chisels from "../Assert/chisels.png";
import trowels from "../Assert/trowels.png";
import clamps from "../Assert/clamps.png";
import filesRasps from "../Assert/files-rasps.png";
import utilityKnife from "../Assert/utility-knife.png";
import stanleyLogo from "../Assert/stanley.png";
import kingtonyLogo from "../Assert/kingtony.png";
import tapariaLogo from "../Assert/taparia.png";
import pyeLogo from "../Assert/pye.png";

const products = [
  { name: "Wrenches", image: wrenches },
  { name: "Hammers", image: hammers },
  { name: "Screwdrivers", image: screwdrivers },
  { name: "Pliers", image: pliers },
  { name: "Chisels", image: chisels },
  { name: "Trowels", image: trowels },
  { name: "Clamps", image: clamps },
  { name: "Files & Rasps", image: filesRasps },
  { name: "Utility Knife", image: utilityKnife },
];

const brands = [
  { image: stanleyLogo, alt: "Stanley" },
  { image: kingtonyLogo, alt: "King Tony" },
  { image: tapariaLogo, alt: "Taparia" },
  { image: pyeLogo, alt: "PYE Hand Tools" },
];

const WeldingMachine = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3>← Welding Machine</h3></button>
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

      <h3 className="brands-title">Our Brands:</h3>
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
