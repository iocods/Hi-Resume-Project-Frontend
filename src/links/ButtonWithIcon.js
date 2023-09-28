import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

function ButtonWithIcon({text, onButtonClick, isIconDown}) {

  return (
    <button className={isIconDown ? "button-with-icon active": "button-with-icon"} onClick={onButtonClick}>
      <span className="text">{text}</span>
      {!isIconDown ? <FiChevronDown className="icon" /> : <FiChevronUp className="icon" />}
    </button>
  );
}

export default ButtonWithIcon;
