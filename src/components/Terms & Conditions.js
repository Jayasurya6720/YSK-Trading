import React from "react";
import { useNavigate } from "react-router-dom";
import "./Terms & Conditions.css";

const Termsconditions = () => {
    const navigate = useNavigate();

    return (
        <div className="aboutus-container">
            <button className="back-btn" onClick={() => navigate(-1)}><i class="bi bi-arrow-left"></i> Terms & Conditions</button>
            <div className="aboutus-content">
                <div className="aboutus-text">
                    <h3>1.General Information</h3>
                    <p>
                        YSK Trading is a supplier of industrial tools and equipment.
                        All content on this website, including text, images, product descriptions, and logos,
                        is owned or licensed by YSK Trading and is protected by intellectual property laws
                    </p>
                    <h3>2.Use of Website</h3>
                    <p>
                        The website is intended for browsing and making product/service inquiries only.
                        You agree not to misuse this site for illegal or unauthorized purposes.
                        We reserve the right to block or terminate access to users who violate these terms.
                    </p>
                    <h3>3.Product Descriptions</h3>
                    <p>
                        While we strive for accuracy, product information provided on the site is for general reference only.
                        We do not guarantee that product descriptions or other content are 100% error-free.
                    </p>
                    <h3>4.Pricing & Availability</h3>
                    <p>
                        Availability is not guaranteed until confirmation is provided by our team after inquiry.

                    </p>
                    <h3>5.Orders & Inquiries</h3>
                    <p>
                        Submitting an inquiry does not constitute an order.
                        Orders will be confirmed only after mutual agreement over email or phone.
                        Final quotations and invoices will be shared based on customized requirements.
                    </p>
                    <h3>6.Limitation of Liability</h3>
                    <p>
                        YSK Trading shall not be liable for any indirect or consequential loss or damage
                        arising from the use of our website or products.
                    </p>

                    <h3>7.Modifications</h3>
                    <p>
                        YSK Trading reserves the right to update or modify these Terms & Conditions
                        at any time without prior notice.
                    </p>
                    <h3>8. Governing Law </h3>
                    <p>
                        These Terms shall be governed by and interpreted in accordance with the laws of Tamil Nadu, India.
                    </p>

                    <div className="buttons-container">
                        <button className="back-btn1" onClick={() => navigate(-1)}>Back</button>
                        <button className="contact-btn" onClick={() => navigate("/contact")}>Contact Us</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Termsconditions;
