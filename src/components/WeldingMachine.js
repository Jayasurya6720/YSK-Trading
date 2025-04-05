import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeldingMachine.css";

import toshonst from "../Assert/welding machines/toshon-250-st.png";
import toshonNano from "../Assert/welding machines/toshon-arc-200-nano.jpg";
import toshonArc200 from "../Assert/welding machines/toshon-arc-200.png";
import toshonarc200n from "../Assert/welding machines/toshon-arc-200n.jpg";
import toshonarc3003phaseIGBTls from "../Assert/welding machines/toshon-arc-300-3phase- IGBT .png";
import toshonarc300 from "../Assert/welding machines/toshon-arc-300.jpg";
import toshonarc400 from "../Assert/welding machines/toshon-arc-400.jpg";
import toshonarc630 from "../Assert/welding machines/toshon-arc-630.jpg";
import toshonare300 from "../Assert/welding machines/toshon-are-300.png";
import stanleyLogo from "../Assert/stanley.png";
import kingtonyLogo from "../Assert/kingtony.png";
import tapariaLogo from "../Assert/taparia.png";
import pyeLogo from "../Assert/pye.png";

const products = [
  { name: "Toshon-250-St", image: toshonst },
  { name: "Toshon-Arc-200-Nano", image: toshonNano },
  { name: "Toshon-Arc-200", image: toshonArc200},
  { name: "Toshon-Arc-200n", image: toshonarc200n },
  { name: "Toshon-Arc-300-3Phase- IGBT ", image: toshonarc3003phaseIGBTls },
  { name: "Toshon-Arc-300", image: toshonarc300 },
  { name: "Toshon-Arc-400", image: toshonarc400 },
  { name: "Toshon-Arc-630", image: toshonarc630 },
  { name: "Toshon-Are-300", image: toshonare300 },
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
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i> Welding Machine</h3></button>
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
