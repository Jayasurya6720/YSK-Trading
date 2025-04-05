import React from "react";
import { useNavigate } from "react-router-dom";
import "./Industrial-Special-Product.css";

import gasweldingrod from "../Assert/Welding Electrode/gas-welding-rod.png";
import monelenicubsupermonel from "../Assert/Welding Electrode/monel-eni-cu-b -super-monel.png";
import nonmacinableestsupercastnmno from "../Assert/Welding Electrode/non-macinable- est- supercast-nm-no.png";
import ss350mmelectrode from "../Assert/Welding Electrode/ss-350mm-electrode.jpg";
import ssweldingrod from "../Assert/Welding Electrode/ss-welding-rod.png";
import superoptimal220915 from "../Assert/Welding Electrode/super-optimal- 2209-15.png";
import superoptimal30715 from "../Assert/Welding Electrode/super-optimal-307-15.png";
import superoptimal316L15 from "../Assert/Welding Electrode/super-optimal-316L-15.png";
import superoptimal6010 from "../Assert/Welding Electrode/super-optimal-6010.png";
import superoptimal6011 from "../Assert/Welding Electrode/super-optimal-6011.png";
import superoptimal7018 from "../Assert/Welding Electrode/super-optimal-7018.png";
import superpowercut from "../Assert/Welding Electrode/super-power-cut.png";


import bestarclogo from "../Assert/Welding Electrode Logo/bestarc-logo.png";
import superonlogo from "../Assert/Welding Electrode Logo/superon-logo.png";

const products = [
  
  { name: "gas Welding Rod", image: gasweldingrod },
  { name: "Monel-Eni-Cu-B Super Monel", image: monelenicubsupermonel },
  { name: "Non-Macinable Est- Supercast-nm No", image: nonmacinableestsupercastnmno },
  { name: "SS 350mm Electrode", image: ss350mmelectrode },
  { name: "SS Welding Rod", image: ssweldingrod },
  { name: "Super Optimal 2209-15", image: superoptimal220915 },
  { name: "Super Optimal-307-15", image: superoptimal30715 },
  { name: "Super Optimal 316L-15", image: superoptimal316L15 },
  { name: "Super Optimal 6010", image: superoptimal6010 },
  { name: "Super Optimal 6011", image: superoptimal6011 },
  { name: "Super Optimal 7018", image: superoptimal7018 },
  { name: "Super Power Cut", image: superpowercut },



  
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
