import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industrial-Special-Product.css";

import Airfilter from "../Assert/Pneumatic/Air-filter.png";
import Airlubricator from "../Assert/Pneumatic/Air-lubricator.png";
import Airregulator from "../Assert/Pneumatic/Air-regulator.png";
import Compactcylinder from "../Assert/Pneumatic/Compact-cylinder.jpg";
import Elbowfitting from "../Assert/Pneumatic/Elbow-fitting.png";
import Filter from "../Assert/Pneumatic/Filter.jpg";
import Multidistributor from "../Assert/Pneumatic/Multi-distributor.png";
import Nylontube from "../Assert/Pneumatic/Nylon-tube.jpg";
import Onetouchfitting from "../Assert/Pneumatic/One-touch-fitting.png";
import Polyurethanecolledtube from "../Assert/Pneumatic/Polyurethane-coiled-tube.png";
import Rotaryactuator from "../Assert/Pneumatic/Rotary-actuator.png";
import Solenoidvalves from "../Assert/Pneumatic/Solenoid-valves.png";
import Swivelfitting from "../Assert/Pneumatic/Swivel-fitting.png";
import Teefitting from "../Assert/Pneumatic/Tee-fitting.png";
import Tierodcylinder from "../Assert/Pneumatic/Tie_rod_cylinder.webp";
import Tubecutter from "../Assert/Pneumatic/Tube-cutter.jpg";





import stanleyLogo from "../Assert/stanley.png";
import kingtonyLogo from "../Assert/kingtony.png";
import tapariaLogo from "../Assert/taparia.png";
import pyeLogo from "../Assert/pye.png";

const products = [
  { name: "Air Filter", image: Airfilter },
  { name: "Air Lubricator", image: Airlubricator },
  { name: "Air Regulator", image: Airregulator},
  { name: "Compact Cylinder", image: Compactcylinder},
  { name: "Elbow Fitting", image: Elbowfitting },
  { name: "Filter", image: Filter },
  { name: "Multi Distributor", image: Multidistributor },
  { name: "Nylon Tube", image: Nylontube },
  { name: "One Touch Fitting", image: Onetouchfitting },
  { name: "Polyurethane Colled Tube", image: Polyurethanecolledtube },
  { name: "Rotary Actuator", image: Rotaryactuator },
  { name: "Solenoid Valves", image: Solenoidvalves },
  { name: "Swivel Fitting", image: Swivelfitting },
  { name: "Tee Fitting", image: Teefitting },
  { name: "Tie Rod Cylinder", image: Tierodcylinder },
  { name: "Tubecutter", image: Tubecutter },


  
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
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i>Pneumatic</h3></button>
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
