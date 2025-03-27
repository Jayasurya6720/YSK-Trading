import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUspage.css"; 
import teamworkImage from "../Assert/teamwork.jfif"; 

const AboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutus-container">
      <button className="back-btn" onClick={() => navigate(-1)}><i class="bi bi-arrow-left"></i> YSK Trading</button>
      <div className="aboutus-content">
        <div className="aboutus-text">
          <p>
            Welcome to <strong>YSK Trading</strong>, your trusted partner in tools and hardware solutions.
            With over <strong>12 years</strong> of industry experience, we pride ourselves on delivering 
            high-quality products that meet the diverse needs of our customers.
          </p>
          <p>
            We specialize in a wide range of offerings, including power tools, hand tools, 
            welding machines, lifting equipment, and general hardware products.
          </p>
          <p>
            Our commitment to excellence has earned us the status of an authorized distributor for 
            leading brands like <strong>Taparia, Stanley,</strong> and <strong>Janatics Pneumatic</strong>, 
            among others. Whether you're looking for reliable tools for professional use or personal 
            projects, we’ve got you covered.
          </p>
          <p>
            <strong>Our mission</strong>: To empower professionals and enthusiasts alike with the tools 
            they need to build, create, and innovate.
          </p>
          <div className="buttons-container">
            <button className="back-btn1" onClick={() => navigate(-1)}>Back</button>
            <button className="contact-btn" onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
        </div>
        <div className="aboutus-image">
          <img src={teamworkImage} alt="Teamwork" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
