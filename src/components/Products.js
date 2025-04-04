import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/Products.css";

import hand from "../Assert/Tools-img.jpg";
import hard from "../Assert/welding-img2.jpg";
import Grinding from "../Assert/safety-img.jpg";
import All from "../Assert/All-Tools.jfif";

const products = [
  { name: "Tools", image: hand, route: "/Tools" },
  { name: "Welding", image: hard, route: "/Welding" },
  { name: "Safety", image: Grinding, route: "/Safety" },
  { name: "Other Products", image: All, route: "/all-products" },
];

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname === "/products"; // ✅ Fixed variable name
  console.log("Current Path:", location.pathname);

  const handleProductClick = (product) => {
    if (product.route) {
      navigate(product.route);
    }
  };

  return (
    <div className="products-container">
      
      <h2 className="enquiry-title">
        {isProductPage ? (
          <button className="back-btn" onClick={() => navigate(-1)}>
            <h2 className="contant">
              <i className="bi bi-arrow-left"></i> Our Products
            </h2>
          </button>
        ) : (
          "Our Products"
        )}
      </h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card" onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-overlay">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      <h2 className="enquiry-title2">
        {isProductPage ? (
          <button className="back-btn" onClick={() => navigate(-1)}>
            <h2 className="contant">
            <button className="all-back-btn" onClick={() => navigate(-1)}>Back</button>
            <button className="all-contact-btn" onClick={() => navigate("/enquiry")}>Contact Us</button>
            </h2>
          </button>
        ) : (
          ""
        )}
      </h2>
    </div>
  );
};

export default Products;
