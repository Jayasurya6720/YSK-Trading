import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tools.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import handTools from "../Assert/Hand-Tools.jfif";
import powerTools from "../Assert/Power-Tools.jpg";

import machineTools from "../Assert/Machine-Tools.jfif";
import measuringTools from "../Assert/Measuring-Tools.jfif";


const allProducts = [
  { name: "Hand Tools", image: handTools, path: "/handtools" },
  { name: "Power Tools", image: powerTools, path: "/power-tools" },
 
  { name: "Machine Tools", image: machineTools, path: "/machine-tools" },

  { name: "Measuring Tools", image: measuringTools, path: "/measuring-tools" },

];

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="all-products-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <h3><i className="bi bi-arrow-left"></i> Tools</h3>
      </button>
      <div className="all-products-grid">
        {allProducts.map((product, index) => (
          <div 
            key={index} 
            className="all-product-card" 
            onClick={() => navigate(product.path)} // Navigate to product page on click
          >
            <img src={product.image} alt={product.name} className="all-product-image" />
            <div className="all-product-overlay">
              <h3 className="h3tagstyle">{product.name}</h3>
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
