import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllProduct.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
  { name: "Hand Tools", image: handTools, path: "/handtools" },
  { name: "Power Tools", image: powerTools, path: "/power-tools" },
  { name: "Welding Accessories", image: weldingAccessories, path: "/welding-accessories" },
  { name: "Welding Machine", image: weldingMachine, path: "/welding-machine" },
  { name: "Welding Electrode", image: weldingElectrode, path: "/welding-electrode" },
  { name: "Machine Tools", image: machineTools, path: "/machine-tools" },
  { name: "Pneumatic", image: pneumatic, path: "/pneumatic" },
  { name: "Measuring Tools", image: measuringTools, path: "/measuring-tools" },
  { name: "Safety", image: safety, path: "/safety" },
  { name: "Industrial Special Products", image: industrialProducts, path: "/industrial-products" },
  { name: "Abrasive", image: abrasive, path: "/abrasive" },
];

const AllProducts = () => {
  const navigate = useNavigate();

  return (
    <div className="all-products-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <h3><i className="bi bi-arrow-left"></i> All Products</h3>
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
