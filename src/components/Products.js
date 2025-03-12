import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Products.css";

import hand from "../Assert/Hand-Tools.jfif";
import hard from "../Assert/Power-Tools.jpg";
import Grinding from "../Assert/Grinding-Tools.jfif";
import All from "../Assert/All-Tools.jfif";


const products = [
  { name: "Hand Tools", image: hand, route: "/handtools" },  // ✅ Added route
  { name: "Power Tools", image: hard, route: "/hard-tools" },
  { name: "Welding Machine", image: Grinding, route: "/welding-machine" },
  { name: "All Tools", image: All, route: "/all-products" },
];


const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    if (product.route) {
      navigate(product.route); // Navigate to new page if route exists
    }
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
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
    </div>
  );
};

export default Products;
