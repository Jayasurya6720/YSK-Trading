import React from "react";
import { useNavigate } from "react-router-dom";
import "./Refund Policy.css";

const RefundPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="aboutus-container">
            <button className="back-btn" onClick={() => navigate(-1)}><i class="bi bi-arrow-left"></i> Refund Policy</button>
            <div className="aboutus-content">
                <div className="aboutus-text">
                    <h3>1.Eligibility for Return</h3>
                    <p>
                        Returns are accepted only if:
                        The product is damaged or defective on arrival.
                        The item delivered is significantly different from what was agreed upon.
                        You notify us within 3 working days from the date of delivery.
                    </p>
                    <h3>2.Non-Returnable Items</h3>
                    <p>
                        Customized or special-order products.
                        Products that have been used or altered.
                        Items returned without original packaging or documents.
                    </p>
                    <h3>3.Return Process</h3>
                    <p>
                        Email us at [your support email] with proof (photos/videos) of the issue.
                        Our team will review and confirm return eligibility.
                        Upon approval, the item must be returned within 7 days in unused condition.
                    </p>
                    <h3>4.Refunds</h3>
                    <p>
                        If approved, refunds will be processed within 7–10 business days via the original payment method.
                        Shipping and handling charges are non-refundable unless the return is due to our error.

                    </p>
                    <h3>5.Cancellations</h3>
                    <p>
                        Orders can be canceled only before dispatch.
                        Cancellation after shipment will be treated as a return (if eligible).
                    </p>
                    <h3>6.Contact Us</h3>
                    <p>
                        For any refund/return-related queries, contact: 📧 [ ysktrading@gmail.com ]
                        📞 [Your contact number]
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

export default RefundPolicy;
