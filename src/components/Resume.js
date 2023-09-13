import React from "react";
import AddProfile from "./AddProfile";
import {useStoreState, useStoreActions} from "easy-peasy";

const Resume = () => {
  const resumeType = "RESUME";
  return <>
    <p>We have stored all of your previous resumes to the database your can checkout a list of all your resume below</p>
    <AddProfile
      type={resumeType}
    />
  </>;
};

export default Resume;
