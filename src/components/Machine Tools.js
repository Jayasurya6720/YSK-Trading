import React from "react";
import { useNavigate } from "react-router-dom";
import "./PowerTools.css";

import annularcutters from "../Assert/machine tools2/annular-cutters.jpg";
import burrcutter from "../Assert/machine tools2/burr-cutter.png";
import chamfering from "../Assert/machine tools2/chamfering.jpeg";
import cutters from "../Assert/machine tools2/cutters.png";
import drillbits from "../Assert/machine tools2/drill-bits.png";
import groovingtools from "../Assert/machine tools2/grooving-tools.png";
import millingtools from "../Assert/machine tools2/milling-tools.jpg";
import reamers from "../Assert/machine tools2/reamers.png";
import tapset from "../Assert/machine tools2/tap-set.jpg";
import threadingdies from "../Assert/machine tools2/threading-dies.jpg";






import addisonlogo from "../Assert/Machine-tools-logo/addison_logo.jpeg";
import mirandalogo from "../Assert/Machine-tools-logo/miranda-logo.png";
import totemlogo from "../Assert/Machine-tools-logo/totem-logo.jpeg";


const products = [
  { name: "Annular Cutters", image: annularcutters },
  { name: "Burr Cutter", image: burrcutter },
  { name: "Chamfering", image: chamfering },
  { name: "Cutters", image: cutters },
  { name: "Drill Bits", image: drillbits },
  { name: "Grooving Tools", image: groovingtools },
  { name: "Milling Tools", image: millingtools },
  { name: "Reamers", image: reamers },
  { name: "Tap Set", image: tapset },
  { name: "Threading Dies", image: threadingdies },

 

];

const brands = [
  { image: addisonlogo, alt: "addisonlogo" },
  { image: mirandalogo, alt: "mirandalogo" },
  { image: totemlogo, alt: "totemlogo" },

];

const PowerTools = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i> Machine Tools</h3></button>
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

export default PowerTools;
