import React from "react";
import { NavLink, Link } from "react-router-dom";

const ResumeNav = () => {
    const navStyle = {
      backgroundColor: "black",
      color: "white",
      padding: 16,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "end"
    }
  return <nav style={navStyle}>
    <Link to={"/resume"}>
        My Resume
    </Link>
    <Link to={"/resume/personal"}>
        Create New Resume
    </Link>
  </nav>;
};

export default ResumeNav;
