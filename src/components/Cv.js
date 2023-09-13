import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import AddProfile from "./AddProfile";

const Cv = () => {
  const cvType = "CV";
  return <div>
    <p>We have stored all of your previous resumes to the database your can checkout a list of all your resume below</p>
    <AddProfile
      type={cvType}
    />
  </div>;
};

export default Cv;