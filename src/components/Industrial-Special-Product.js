import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industrial-Special-Product.css";

import hydraulichoses from "../Assert/Industrial Special Product/hydraulic-hoses.jpg";
import chainsandsprockets from "../Assert/Industrial Special Product/chains-and-sprockets.jpg";
import purods from "../Assert/Industrial Special Product/pu-rods.png";
import packingsheet from "../Assert/Industrial Special Product/packing-sheet.jpg";
import puwheels from "../Assert/Industrial Special Product/pu-wheels.jpg";
import sshose from "../Assert/Industrial Special Product/ss-hose.png";
import tyrecoupling from "../Assert/Industrial Special Product/tyre-coupling.png";


// import stanleyLogo from "../Assert/stanley.png";
// import kingtonyLogo from "../Assert/kingtony.png";
// import tapariaLogo from "../Assert/taparia.png";
// import pyeLogo from "../Assert/pye.png";

const products = [
    { name: "Hydraulic-Hoses", image: hydraulichoses },
  { name: "Chains And Sprockets", image: chainsandsprockets },
  { name: "Pu Rods", image: purods},
  { name: "Packing-Sheet", image: packingsheet},
  { name: "Pu Wheels", image: puwheels },
  { name: "SS-Hose", image: sshose },
  { name: "Tyre Coupling", image: tyrecoupling },
  
];

// const brands = [
//   { image: stanleyLogo, alt: "Stanley" },
//   { image: kingtonyLogo, alt: "King Tony" },
//   { image: tapariaLogo, alt: "Taparia" },
//   { image: pyeLogo, alt: "PYE Hand Tools" },
// ];

const WeldingMachine = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i> Industrial Special Product</h3></button>
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

      {/* <h3 className="brands-title">Our Dealers:</h3>
      <div className="brands-container">
        {brands.map((brand, index) => (
          <img key={index} src={brand.image} alt={brand.alt} className="brand-logo" />
        ))}
      </div> */}

      <div className="buttons-container">
        <button className="back-btn1" onClick={() => navigate(-1)}>Back</button>
        <button className="contact-btn" onClick={() => navigate("/enquiry")}>Contact Us</button>
      </div>
    </div>
  );
};

export default WeldingMachine;
