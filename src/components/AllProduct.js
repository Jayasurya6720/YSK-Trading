import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllProduct.css";

import handTools from "../Assert/Hand-Tools.jfif";
import powerTools from "../Assert/Power-Tools.jpg";
import weldingAccessories from "../Assert/Welding-Accessories.jfif";
import weldingMachine from "../Assert/Welding-Machine.jfif";
import weldingElectrode from "../Assert/Welding-Electrode.png";
import machineTools from "../Assert/Machine-Tools.jfif";
import pneumatic from "../Assert/Pneumatic.png";
import measuringTools from "../Assert/Measuring-Tools.jfif";
import safety from "../Assert/Safety.jfif";
import industrialProducts from "../Assert/Industrial-Special-Products.png";
import abrasive from "../Assert/Abrasive.jfif";

const allProducts = [
  { name: "Hand Tools", image: handTools },
  { name: "Power Tools", image: powerTools },
  { name: "Welding Accessories", image: weldingAccessories },
  { name: "Welding Machine", image: weldingMachine },
  { name: "Welding Electrode", image: weldingElectrode },
  { name: "Machine Tools", image: machineTools },
  { name: "Pneumatic", image: pneumatic },
  { name: "Measuring Tools", image: measuringTools },
  { name: "Safety", image: safety },
  { name: "Industrial Special Products", image: industrialProducts },
  { name: "Abrasive", image: abrasive },
];

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="all-products-page">
      <button className="back-btn" onClick={() => navigate(-1)}><h3>← All Products</h3></button>
      <div className="all-products-grid">
        {allProducts.map((product, index) => (
          <div key={index} className="all-product-card">
            <img src={product.image} alt={product.name} className="all-product-image" />
            <div className="all-product-overlay">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <button className="all-back-btn" onClick={() => navigate(-1)}>Back</button>

      <button className="all-contact-btn" onClick={() => navigate("/enquiry")}>Contact Us</button>
    </div>
  );
};

export default AllProducts;
