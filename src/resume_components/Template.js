import React from "react";
import cvTemplate from "../background.jpg";

const Template = () => {
  return <div 
    className="template-box" >
    <img className="template-image" src={cvTemplate} alt="Cv Template Example" />
    <button className="template-button login-links">Create</button>
  </div>;
};

export default Template;
