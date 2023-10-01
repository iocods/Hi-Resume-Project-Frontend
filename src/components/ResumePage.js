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
        title: "Resume Title I",
        userInformation: {
            firstname: 'Timothy',
            lastname: 'Johnson',
            email: 'TJohnson@gmail.com'
        },
        userAddress: {
            suiteNo: 7,
            address: 'Tony Johnson off ong highway',
            city: 'Vegas City',
            province: 'California',
            country: 'United States'
        },
        userWorkHistories: [{
            companyName: 'Mecury Incoporated',
            role: 'Managing Director',
            description: 'I was the managing director of the cooperation for a period of 7 years and as a managing director of the company I was in charge of some major operatons that the company carried out in ',
            start: 'June 2011',
            end: 'April 2018',
        },
        {
            companyName: 'Hot Drills Limited',
            role: 'Head Driller',
            description: 'Hot Drills is a company that deals mainly with the delevery of services which mainly involves the drilling of bore holes, reservoirs amongst others, I was head driller at Hot drills for a span of 3 years and during this period Hot drills saw an increase in the efficiency of it workers as I saw to it that my main responsibility was my number one priority I made sure that drillers that were placed under me all got their job done and as a result of this I had to properly inspect the jobs of junior drillers at intervals and corrected them where they may have made some errors and this saw to the growth of the drillers and over time they got properly aquainted with the job',
            start: 'September 2019',
            end: '2022',
        }],
        userEducationDetails: [{
            collegeName: 'Western Boys High School',
            field: 'Science',
            degree: 'WASSCE',
            start: '2000',
            end: '2006'
        },
        {
            collegeName: 'University of Notre Dame',
            field: 'Civil Engineering',
            degree: 'B.Eng',
            start: '2008',
            end: '2012'
        }]
        }
    , 
        {
            title: "Resume Title II"
        }
    ]
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
