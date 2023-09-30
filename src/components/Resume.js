import React, { useState } from "react";
import AddProfile from "./AddProfile";
import {useStoreState, useStoreActions} from "easy-peasy";
import CreateResume from "./CreateResume";
import { Routes, Route } from "react-router-dom";
import ResumePage from "./ResumePage";
import EditResume from "./EditResume";

const Resume = () => {
  const resumeType = "RESUME";
  const [isCreated, setIsCreated] = useState(false);
  return <>
    <Routes>
      <Route
        path={"/"}
        element={<ResumePage />}
      />
      <Route
        path={"/edit"}
        element={<EditResume />}
      />
      <Route 
        path={"/*"}
        element={<CreateResume />} 
      />
    </Routes>
  </>
};

export default Resume;
