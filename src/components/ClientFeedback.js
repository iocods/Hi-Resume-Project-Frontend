import React from "react";
import customerImage from "../background.jpg";

const ClientFeedback = () => {
    const image = customerImage;
  return <div className="feedback-container">
    <h2>What Our Clients Has To Say</h2>
    <div className="review-container">
        <div>
            <img className="customer-image" src={image} alt="customer pics"/>
        </div>
        <div className="text-container">
            Customer Review
        </div>
    </div>
  </div>;
};

export default ClientFeedback;
