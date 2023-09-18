import React from "react";
import {FaPlus} from 'react-icons/fa';

const IconContainer = () => {
  return <section className="icon-section">
    <div className="icon-container">
        <div className="icon-box">
            <FaPlus />
        </div>
        <p>
            Icon Container 1.
        </p>
    </div>
    <div className="icon-container">
        <div className="icon-box">
            <FaPlus />
        </div>
        <p>
            Icon Container 2.
        </p>
    </div>
    <div className="icon-container">
        <div className="icon-box">
            <FaPlus />
        </div>
        <p>
            Icon Container 3.
        </p>
    </div>
  </section>;
};

export default IconContainer;
