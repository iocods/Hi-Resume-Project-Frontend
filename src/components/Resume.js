import React, { useState } from "react";
import AddProfile from "./AddProfile";
import {useStoreState, useStoreActions} from "easy-peasy";
import ResumeNav from "./ResumeNav";
import CreateResume from "./CreateResume";
import { Routes, Route } from "react-router-dom";

const Resume = () => {
  const resumeType = "RESUME";
  const [isCreated, setIsCreated] = useState(false);
  return <>
    <ResumeNav/>
    <Routes>
      <Route 
        path={"/*"}
        element={<CreateResume />} 
      />
    </Routes>
  </>
};

export default Resume;
