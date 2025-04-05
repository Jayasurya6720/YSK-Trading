import React from "react";
import { useNavigate } from "react-router-dom";
import "./Safety.css";

import anemometer from "../Assert/Measuring Tools/anemometer.jpg";
import bevelededgesquares from "../Assert/Measuring Tools/beveled-edge-squares.jpg";
import dialcalipers from "../Assert/Measuring Tools/dial-calipers.jpg";
import dialtestindicators from "../Assert/Measuring Tools/dial-test-indicators.jpg";
import digimaticblademicrometers from "../Assert/Measuring Tools/digimatic-blade-micrometers.jpg";
import digimaticcalipers from "../Assert/Measuring Tools/digimatic-calipers.jpg";
import digimaticdepthcalipers from "../Assert/Measuring Tools/digimatic-depth-calipers.jpg";
import digimaticinsidepointtypecalipers from "../Assert/Measuring Tools/digimatic-inside-point-type-calipers.jpg";
import digimaticmicrometers from "../Assert/Measuring Tools/digimatic-micrometers.jpg";
import digimaticthicknessgauges from "../Assert/Measuring Tools/digimatic-thickness-gauges.jpg";
import digitdialheightgauges from "../Assert/Measuring Tools/digit-dial-height-gauges.jpg";
import doublefacedialindicator from "../Assert/Measuring Tools/double-face-dial-indicator.jpg";
import fractiondigimaticcalipers from "../Assert/Measuring Tools/fraction-digimatic-calipers.jpg";
import geartoothverniercalipers from "../Assert/Measuring Tools/gear-tooth-vernier-calipers.jpg";
import groovemicrometers from "../Assert/Measuring Tools/groove-micrometers.jpg";
import steelrulers from "../Assert/Measuring Tools/steel-rulers.jpg";
import steeltapes from "../Assert/Measuring Tools/steel-tapes.jpg";
import verniercaliper from "../Assert/Measuring Tools/vernier-caliper.jpg";
import VernierHeightGauges from "../Assert/Measuring Tools/Vernier-Height-Gauges.png";
import verticaldialtestindicator from "../Assert/Measuring Tools/vertical-dial-test-indicator.jpg";





import stanleyLogo from "../Assert/stanley.png";
import kingtonyLogo from "../Assert/kingtony.png";
import tapariaLogo from "../Assert/taparia.png";
import pyeLogo from "../Assert/pye.png";

const products = [
  { name: "Anemometer", image: anemometer },
  { name: "Beveled Edge Squares", image: bevelededgesquares },
  { name: "Dial Calipers", image: dialcalipers},
  { name: "Dial Test Indicators", image: dialtestindicators },
  { name: "Digimatic Blade Micrometers", image: digimaticblademicrometers },
  { name: "Digimatic Calipers", image: digimaticcalipers },
  { name: "Digimatic Depth Calipers", image: digimaticdepthcalipers },
  { name: "Digimatic Inside Point Type Calipers", image: digimaticinsidepointtypecalipers },
  { name: "Digimatic Micrometers", image: digimaticmicrometers },
  { name: "Digimatic Thickness Gauges", image: digimaticthicknessgauges },
  { name: "Digit Dial Height Gauges", image: digitdialheightgauges },
  { name: "Double Face Dial Indicator", image: doublefacedialindicator },
  { name: "Fraction Digimatic Calipers", image: fractiondigimaticcalipers},
  { name: "Gear Tooth Vernier Calipers", image: geartoothverniercalipers },
  { name: "Groove Micrometers", image: groovemicrometers },
  { name: "Steel Rulers", image: steelrulers },
  { name: "Steel Tapes", image: steeltapes },
  { name: "Vernier Caliper", image: verniercaliper },
  { name: "Vernier Height Gauges", image: VernierHeightGauges },
  { name: "Vertical Dial Test Indicator", image: verticaldialtestindicator },



];

const brands = [
  { image: stanleyLogo, alt: "Stanley" },
  { image: kingtonyLogo, alt: "King Tony" },
  { image: tapariaLogo, alt: "Taparia" },
  { image: pyeLogo, alt: "PYE Hand Tools" },
];

const MeasuringTools = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i>Measuring Tools</h3></button>
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

export default MeasuringTools;
