import React, {useEffect, useContext} from "react";
import { Route, Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import AddProfile from './AddProfile';
import { Typography } from "@mui/material";
import IconContainer from './IconContainer';
import DataContext from '../context/DataContext';
import Template from "../resume_components/Template";
import Container from "./Container";
import ClientFeedback from "./ClientFeedback";
import About from "./About";
import imageOne from '../resume_templates/Resume_1.jpg';
import imageTwo from '../resume_templates/Resume_2.jpg';
import imageThree from '../resume_templates/Resume_3.jpg';
import imageFour from '../resume_templates/Resume_4.jpg';
import Footer from "./Footer";
const Home = () => {
    const templateImageOne = [
        imageOne,
        imageTwo,
        imageThree,
        imageFour
    ]
    const user = useStoreState(state => state.userLogin);
    const resumeType = "RESUME";
    const {setDropDownFalse} = useContext(DataContext);
    useEffect(() => (setDropDownFalse), []);

  return <>
        <section className="home-top-section" onClick={setDropDownFalse}>
            <div className="image-container">
                
            </div>
            <div className="home-text-container">
                <h1>
                    GET THE PERFECT RESUME FOR THAT JOB APPLICATION
                    BUILD YOUR CV WITH HI-RESUME CREATOR
                </h1>
                <button className="login-links">Create Resume</button>
            </div>
        </section>
        <section className="home-bottom-section">
            <div>
                <p className="medium-font">Show them that you've got what it takes to take their Company to the next level</p>
                <p className="medium-font">Select a template from the list of given templates below and start creating your Resume!</p>
            </div>
        </section>
        <Container type={"Cv Template"} template={templateImageOne}/>
        <Container type={"Resume Template"} template={templateImageOne}/>
        <Container type={"Cover Letter Template"} template={templateImageOne}/>
        <IconContainer />
        <ClientFeedback />
        <About />
    </>;
};

export default Home;