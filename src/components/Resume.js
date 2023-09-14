import React, { useState } from "react";
import AddProfile from "./AddProfile";
import {useStoreState, useStoreActions} from "easy-peasy";

const Resume = () => {
  const resumeType = "RESUME";
  const [isCreated, setIsCreated] = useState(false);
  return <>
    <>
      {!isCreated && <><p>We have stored all of your previous resumes to the database your can checkout a list of all your resume below</p>
      <AddProfile
        type={resumeType}
        setIsCreated={setIsCreated}
      /></>}
    </>
  </>;
};

export default Resume;
