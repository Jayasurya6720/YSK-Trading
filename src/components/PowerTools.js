import React from "react";
import { useNavigate } from "react-router-dom";
import "./PowerTools.css";

import anglemeachine from "../Assert/Power tools/7_angle-meachine.png";
import cutting from "../Assert/Power tools/14_cutting.png";
import airblowermeachine from "../Assert/Power tools/air-blower-meachine.png";

import jigsawmeachine from "../Assert/Power tools/jigsaw-meachine.png";
import mebreakermeachine from "../Assert/Power tools/m-e-breaker-meachine.png";
import magnetdrillmeachine from "../Assert/Power tools/magnet-drill-meachine.png";
import marblecuttermeachine from "../Assert/Power tools/marble-cutter-meachine.png";
import mitersawmeachine from "../Assert/Power tools/miter-saw-machine2.png";
import plannermeachine from "../Assert/Power tools/planner-meachine.png";
import rotaryhemmermeachine from "../Assert/Power tools/rotary-hemmer-meachine.png";
import routerendicomeachine from "../Assert/Power tools/router-endico-meachine.png";
import benchgrinder from "../Assert/Power tools/bench-grinder.jpeg";





import boschlogo from "../Assert/Power tools logo/bosch-logo.png";
import DeWaltlogo from "../Assert/Power tools logo/DeWalt logo.png";
import hikokilogo from "../Assert/Power tools logo/hikoki-logo.png";
import hitachilogo from "../Assert/Power tools logo/hitachi-logo.png";
import makitalogo from "../Assert/Power tools logo/makita-logo.png";


const products = [
  { name: "Angle Grinder", image: anglemeachine },
  { name: "Chopsaw", image: cutting },
  { name: "Air Blower Machine", image: airblowermeachine },
  
  { name: "Jigsaw Machine", image: jigsawmeachine },
  { name: "M E Breaker Machine", image: mebreakermeachine },
  { name: "Magnet Drill Machine", image: magnetdrillmeachine },
  { name: "Marble Cutter Machine", image: marblecuttermeachine },
  { name: "Miter Saw Machine", image: mitersawmeachine },
  { name: "Planner Machine", image: plannermeachine },
  { name: "Hand Drill Machine", image: rotaryhemmermeachine },
  { name: "Router Endico Machine", image: routerendicomeachine },
  { name: "Bench Grinder", image: benchgrinder },

];

const brands = [
  { image: boschlogo, alt: "boschlogo" },
  { image: DeWaltlogo, alt: "DeWaltlogo" },
  { image: hikokilogo, alt: "hikokilogo" },
  { image: hitachilogo, alt: "hitachilogo" },
  { image: makitalogo, alt: "makitalogo" },

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
