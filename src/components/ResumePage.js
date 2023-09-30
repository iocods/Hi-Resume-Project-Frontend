import React, {useContext} from "react";
import ItemList from "./ItemList";
import DataContext from "../context/DataContext";
import { useStoreState } from "easy-peasy";
import Container from "./Container";
import imageOne from '../resume_templates/Resume_1.jpg';
import imageTwo from '../resume_templates/Resume_2.jpg';
import imageThree from '../resume_templates/Resume_3.jpg';
import imageFour from '../resume_templates/Resume_4.jpg';


const ResumePage = () => {
    const templateImageOne = [
        imageOne,
        imageTwo,
        imageThree,
        imageFour
    ]
    const type = useStoreState(state => state.type);
    const resume = [{
        title: "Resume Title I"
    }, {
        title: "Resume Title II"
    }]
  return <section className="resume-page">
    <div className="resume-list-container">
        <h2>Your Resumes</h2>

        {resume.map((r, index) => <ItemList key={index} item={r} />)}
    </div>
    <div>
        <p>
            Resume is a summary of yourself and history to the prospective employer,
            Hi-resume makes sure of it that you stand out amongst the others build with 
            Hi-Resume now select a template from the given list below and add to your previous
            collection.
        </p>
    </div>
    <Container type={"Resume Template"} template={templateImageOne}/>
  </section>;
};

export default ResumePage;
