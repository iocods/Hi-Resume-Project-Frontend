import React from "react";
import {FaPlus, FaRobot, FaCrown, FaFolder} from 'react-icons/fa';
import Multiple from "../custom_icons/Multiple";
import OpenAi from "../custom_icons/OpenAi";
import Freemium from "../custom_icons/Freemium";

const IconContainer = () => {
    const iconStyle = {
      fontSize: '64px',
      color: 'blue'
    };
  
  return <section className="icon-section">
    <h1>Why Hi-Resume</h1>
    <div className="icon-wrapper">
        <div className="icon-container">
            <div>
                <Multiple />
            </div>
            <p>Multiple Templates</p>
        </div>
        <div className="icon-container">
            <div>
                <OpenAi />
            </div>
            <p>Open AI Integration</p>
        </div>
        <div className="icon-container">
            <div>
                <Freemium />
            </div>
            <p>Freemium and Premium</p>
        </div>
    </div>
  </section>;
};

export default IconContainer;
