import React from "react";
import { useNavigate } from "react-router-dom";
import "./HandTools.css";

import adjustablewrench from "../Assert/Hand tools/adjustable-wrench.png";
import bucketgreasegunheavy from "../Assert/Hand tools/bucket-grease-gun-heavy2.png";
import cuttingplayer from "../Assert/Hand tools/cutting-player.png";
import doublehansspanners from "../Assert/Hand tools/double-hans-spanners.jpg";
import greasegun from "../Assert/Hand tools/grease-gun.jpg";
import noseplayer from "../Assert/Hand tools/nose-player.jpg";
import pipewrench from "../Assert/Hand tools/pipe-wrench.png";
import rindsapnners from "../Assert/Hand tools/rind-sapnners.png";
import screwdrivers from "../Assert/Hand tools/screw-drivers.png";
import sockethandles from "../Assert/Hand tools/socket-handles.png";
import starbit from "../Assert/Hand tools/star-bit .jpg";
import thandlepanner from "../Assert/Hand tools/t-handle-panner.png";
import toolsboxset from "../Assert/Hand tools/tools-box-set.png";

import stanleyLogo from "../Assert/stanley.png";
import kingtonyLogo from "../Assert/kingtony.png";
import tapariaLogo from "../Assert/taparia.png";
import pyeLogo from "../Assert/pye.png";

const products = [
  { name: "Adjustable wrench", image: adjustablewrench },
  { name: "Bucket Grease Gun Heavy", image: bucketgreasegunheavy },
  { name: "Cutting Player", image: cuttingplayer },
  { name: "Double Hans Spanners", image: doublehansspanners },
  { name: "Grease Gun", image: greasegun },
  { name: "Nose Player", image: noseplayer },
  { name: "Pipe Wrench", image: pipewrench },
  { name: "Rind Sapnners", image: rindsapnners },
  { name: "Screw Drivers", image: screwdrivers },
  { name: "Socket Handles", image: sockethandles },
  { name: "Star Bit", image: starbit },
  { name: "T Handle Panner", image: thandlepanner },
  { name: "Tools Box Set", image: toolsboxset },


];

const brands = [
  { image: stanleyLogo, alt: "Stanley" },
  { image: kingtonyLogo, alt: "King Tony" },
  { image: tapariaLogo, alt: "Taparia" },
  { image: pyeLogo, alt: "PYE Hand Tools" },
];

const HandTools = () => {
  const navigate = useNavigate();

  return (
    <div className="hand-tools-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3><i class="bi bi-arrow-left"></i> Hand Tools</h3></button>
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

export default HandTools;
