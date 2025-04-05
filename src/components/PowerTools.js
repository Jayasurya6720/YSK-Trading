import React from "react";
import { useNavigate } from "react-router-dom";
import "./PowerTools.css";

import anglemeachine from "../Assert/Power tools/7_angle-meachine.png";
import cutting from "../Assert/Power tools/14_cutting.png";
import wattpneumaticdrill from "../Assert/Power tools/320-watt-pneumatic-drill.png";
import airblowermeachine from "../Assert/Power tools/air-blower-meachine.png";
import aircompressermeachine from "../Assert/Power tools/air-compresser-meachine.jpg";
import beddrillmeachine from "../Assert/Power tools/bed-drill-meachine.png";
import dewaltcutting from "../Assert/Power tools/dewalt-4_-cutting.jpg";
import jigsawmeachine from "../Assert/Power tools/jigsaw-meachine.png";
import mebreakermeachine from "../Assert/Power tools/m-e-breaker-meachine.png";
import magnetdrillmeachine from "../Assert/Power tools/magnet-drill-meachine.png";
import marblecuttermeachine from "../Assert/Power tools/marble-cutter-meachine.png";
import mitersawmeachine from "../Assert/Power tools/miter-saw-meachine.png";
import plannermeachine from "../Assert/Power tools/planner-meachine.png";
import rotaryhemmermeachine from "../Assert/Power tools/rotary-hemmer-meachine.png";
import routerendicomeachine from "../Assert/Power tools/router-endico-meachine.png";




import stanleyLogo from "../Assert/stanley.png";
import kingtonyLogo from "../Assert/kingtony.png";
import tapariaLogo from "../Assert/taparia.png";
import pyeLogo from "../Assert/pye.png";

const products = [
  { name: "7 Angle Meachine", image: anglemeachine },
  { name: "14_cutting", image: cutting },
  { name: "320 Watt Pneumatic Drill", image: wattpneumaticdrill },
  { name: "Air Blower Meachine", image: airblowermeachine },
  { name: "Air Compresser Meachine", image: aircompressermeachine },
  { name: "beddrillmeachine", image: beddrillmeachine },
  { name: "Dewalt 4_ Cutting", image: dewaltcutting },
  { name: "Jigsaw Meachine", image: jigsawmeachine },
  { name: "M E Breaker Meachine", image: mebreakermeachine },
  { name: "Magnet Drill Meachine", image: magnetdrillmeachine },
  { name: "Marble Cutter Meachine", image: marblecuttermeachine },
  { name: "Miter Saw Meachine", image: mitersawmeachine },
  { name: "Planner Meachine", image: plannermeachine },
  { name: "Rotary Hemmer Meachine", image: rotaryhemmermeachine },
  { name: "Router Endico Meachine", image: routerendicomeachine },

];

const brands = [
  { image: stanleyLogo, alt: "Stanley" },
  { image: kingtonyLogo, alt: "King Tony" },
  { image: tapariaLogo, alt: "Taparia" },
  { image: pyeLogo, alt: "PYE Hand Tools" },
];

const PowerTools = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i> Power Tools</h3></button>
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

export default PowerTools;
