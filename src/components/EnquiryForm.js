import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./EnquiryForm.css"; // Import the CSS file

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Service Details
    const serviceID = "service_s3psc6v"; // Replace with your EmailJS Service ID
    const templateID = "template_uv7cxn2"; // Replace with your EmailJS Template ID
    const publicKey = "SelGdyC7T3Sp6eb_o"; // Replace with your EmailJS Public Key

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your enquiry has been sent successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send enquiry. Please try again.");
      });
  };

  return (
    <div className="enquiry-container">
      <h2 className="enquiry-title">For Enquiry</h2>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-left">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail id"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-right">
          <textarea
            name="message"
            placeholder="Send a message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-button">
            Send <span>➤</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
