import React from "react";
import { FaPlus } from "react-icons/fa";

const AddButton = ({onClick}) => {
  return <button className="add-btn" onClick={onClick}>
    <FaPlus />
    <span> Add</span>
  </button>;
};

export default AddButton;
