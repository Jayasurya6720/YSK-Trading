import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industrial-Special-Product.css";

import cableconnector from "../Assert/welding accessories/cable-connector.jpg";
import chippinghammer from "../Assert/welding accessories/chipping-hammer.png";
import cuttinghose from "../Assert/welding accessories/cutting-hose.webp";
import cuttingtorch from "../Assert/welding accessories/cutting-torch.png";
import cylinderkey from "../Assert/welding accessories/cylinder-key.png";
import doublegaugeregulator from "../Assert/welding accessories/double-gauge-regulator.png";
import earthclamp from "../Assert/welding accessories/earth-clamp.png";
import steelwirebrush from "../Assert/welding accessories/steel-wire-brush.png";
import weldersgoggle from "../Assert/welding accessories/welders-goggle.png";
import weldingcables from "../Assert/welding accessories/welding-cables.png";
import weldingglove from "../Assert/welding accessories/welding-glove.png";
import weldinghandshield from "../Assert/welding accessories/welding-hand-shield.jpg";
import weldinghandshield2 from "../Assert/welding accessories/welding-hand-shield.png";
import weldingholder from "../Assert/welding accessories/welding-holder.png";
import weldingtorch from "../Assert/welding accessories/welding-torch.png";
import antispatterspray from "../Assert/welding accessories/anti-spatter-spray.png";
import apron from "../Assert/welding accessories/apron.png";
import handgloves from "../Assert/welding accessories/hand-gloves.png";
import weldinghelmet from "../Assert/welding accessories/welding-helmet.jpeg";








import Arconlogo from "../Assert/Welding Accessories Logo/Arcon-logo.png";
import Ashaweldlogo from "../Assert/Welding Accessories Logo/Ashaweld-logo.png";


const products = [
  { name: "Cable Connector", image: cableconnector },
  { name: "Chipping Hammer", image: chippinghammer },
  { name: "Cutting-Hose", image: cuttinghose},
  { name: "Cutting Torch", image: cuttingtorch},
  { name: "Cylinder Key", image: cylinderkey },
  { name: "Double Gauge Regulator", image: doublegaugeregulator },
  { name: "Earth Clamp", image: earthclamp },
  { name: "Steel Wire Brush", image: steelwirebrush },
  { name: "Welders Goggle", image: weldersgoggle },
  { name: "Welding Cables", image: weldingcables },
  { name: "Welding Glove", image: weldingglove },
  { name: "Welding Hand Shield", image: weldinghandshield },
  { name: "Welding Hand Shield", image: weldinghandshield2 },
  { name: "Welding Holder", image: weldingholder },
  { name: "Anti Spatter Spray", image: antispatterspray },
  { name: "Apron", image: apron },
  { name: "Hand Gloves", image: handgloves },
  { name: "Welding Helmet", image: weldinghelmet },
  { name: "Welding Torch", image: weldingtorch },


  
];

const brands = [
  { image: Arconlogo, alt: "Arconlogo" },
  { image: Ashaweldlogo, alt: "Ashaweldlogo" },
 
];

const WeldingMachine = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i>Welding Accessories</h3></button>
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
