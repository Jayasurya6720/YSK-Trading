import React from "react";
import { useNavigate } from "react-router-dom";
import "./PowerTools.css";

import mmbradpointdrilling from "../Assert/Machine tools/2-4-mm-brad-point-drilling .jpg";
import MilingMachineTools from "../Assert/Machine tools/25-mm-2-Milling-Machine-Tools.png";
import arborthada from "../Assert/Machine tools/arbor-thada.png";
import CrMo4machinetools from "../Assert/Machine tools/CrMo4-machine-tools.webp";
import hurcomachinetoolsbmt55er25 from "../Assert/Machine tools/hurco-machine-tools-bmt-55-er25.png";
import newkalsi from "../Assert/Machine tools/new-kalsi .jpeg";
import sschromefinishgolisodacapping from "../Assert/Machine tools/ss-chrome-finish-goli-soda-capping .jpg";
import SS304machinetoolcoolers from "../Assert/Machine tools/SS304-machine-tool-coolers.png";
import standardechain from "../Assert/Machine tools/standard-echain.png";
import turninginsertmildsteelEIFCO from "../Assert/Machine tools/turning-insert-mild-steel-EIFCO.png";





import stanleyLogo from "../Assert/stanley.png";
import kingtonyLogo from "../Assert/kingtony.png";
import tapariaLogo from "../Assert/taparia.png";
import pyeLogo from "../Assert/pye.png";

const products = [
  { name: "2-4-mm Brad Point Drilling", image: mmbradpointdrilling },
  { name: "25-mm-2 Milling Machine Tools", image: MilingMachineTools },
  { name: "Arbor Thada", image: arborthada },
  { name: "CrMo4 Machine Tools", image: CrMo4machinetools },
  { name: "Hurco Machine Tools Bmt 55 Er25", image: hurcomachinetoolsbmt55er25 },
  { name: "New Kalsi", image: newkalsi },
  { name: "SS Chrome Finish Goli Soda Capping", image: sschromefinishgolisodacapping },
  { name: "SS304 Machine Tool Coolers", image: SS304machinetoolcoolers },
  { name: "Standard Echain", image: standardechain },
  { name: "Turning Insert Mild Steel EIFCO", image: turninginsertmildsteelEIFCO },
 

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
