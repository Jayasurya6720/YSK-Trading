import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industrial-Special-Product.css";

import gasweldingrod from "../Assert/Welding Electrode/gas-welding-rod.png";
import aluminiumtigweldingrod from "../Assert/Welding Electrode/aluminium-tig-welding-rod.jpg";
import castainweldingelectrode from "../Assert/Welding Electrode/castain-welding-electrode.png";
import cuttingelectrode from "../Assert/Welding Electrode/cutting-electrode.png";
import dissimilarweldingelectrode from "../Assert/Welding Electrode/dissimilar-welding-electrode.png";
import migweldingcoil from "../Assert/Welding Electrode/mig-welding-coil.png";
import msweldingelectrode from "../Assert/Welding Electrode/ms-welding-electrode.png";
import ssweldingelectrode from "../Assert/Welding Electrode/ss-welding-electrode.png";
import tigtungstenrod from "../Assert/Welding Electrode/tig-tungsten-rod.png";
import tigweldingrod from "../Assert/Welding Electrode/tig-welding-rod.png";



import bestarclogo from "../Assert/Welding Electrode Logo/bestarc-logo.png";
import superonlogo from "../Assert/Welding Electrode Logo/superon-logo.png";

const products = [
  
  { name: "gas Welding Rod", image: gasweldingrod },
  { name: "Aluminium Tig Welding Rod", image: aluminiumtigweldingrod},
  { name: "Castain Welding Electrode", image: castainweldingelectrode},
  { name: "Cutting Electrode", image: cuttingelectrode },
  { name: "Dissimilar Welding Electrode", image: dissimilarweldingelectrode },
  { name: "Mig Welding Coil", image: migweldingcoil },
  { name: "MS Welding Electrode", image: msweldingelectrode },
  { name: "SS Welding Electrode", image: ssweldingelectrode },
  { name: "Tig Tungsten Rod", image: tigtungstenrod },
  { name: "Tig Welding Rod", image: tigweldingrod },
  



  
];

const brands = [
  { image: bestarclogo, alt: "bestarclogo" },
  { image: superonlogo, alt: "superonlogo" },

];

const WeldingMachine = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i>Welding Electrode</h3></button>
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
