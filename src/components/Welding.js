import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welding.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import weldingAccessories from "../Assert/Welding-Accessories.jfif";
import weldingMachine from "../Assert/welding-machine-tumb.jpg";
import weldingElectrode from "../Assert/Welding-Electrode.png";

const allProducts = [
  
  { name: "Welding Accessories", image: weldingAccessories, path: "/welding-accessories" },
  { name: "Welding Machine", image: weldingMachine, path: "/welding-machine" },
  { name: "Welding Electrode", image: weldingElectrode, path: "/welding-electrode" },
  
];

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="all-products-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <h3><i className="bi bi-arrow-left"></i> Welding</h3>
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
