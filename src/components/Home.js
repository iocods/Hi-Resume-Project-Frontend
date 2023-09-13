import React, {useEffect} from "react";
import { Route, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import AddProfile from './AddProfile';

const Home = () => {
    const user = useStoreState(state => state.userLogin);
    const resumeType = "RESUME";

  return <>
        <AddProfile 
           type={resumeType}
        />
    </>;
};

export default Home;
