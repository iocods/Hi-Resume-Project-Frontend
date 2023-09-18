import {React, useState, useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Address from "../resume_components/Address";
import WorkHistory from "../resume_components/WorkHistory";
import PersonalInfo from "../resume_components/PersonalInfo";
import Education from "../resume_components/Education";
import SkillsAndLanguage from "../resume_components/SkillsAndLanguage";
import Reference from "../resume_components/Reference";

const CreateResume = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState('Personal Information');
    
    useEffect(() => {}, []);
    const category = [
        {
            index: 0,
            name: "Personal Information",
            path: "/resume/personal"
        },
        {
            index: 1,
            name: "Current Address",
            path: "/resume/address"
        },
        {
            index: 2,
            name: "Education Details",
            path: "/resume/education"
        },
        {
            index: 3,
            name: "Work History",
            path: "/resume/workhistory"
        },
        {
            index: 4,
            name:  "Skills and Language",
            path: "/resume/skills"
        },
        {
            index: 5,
            name:"Reference",
            path: "/resume/reference"
        }
    ]
    return <main className="create-resume">
        <section className="category-nav">
            <h1>Hi Resume</h1>
            <ul>
                {category.map(c => <li key={c.name} className={c.name === currentCategory ? "active" : ""}>
                    <Link className={c.name === currentCategory ? "active" : ""} to={c.path}>{c.name.toUpperCase()}</Link></li>)}
            </ul>
        </section>
        <div className="div-form">
            <div className="completed-categories">
                <p>{currentCategory}</p>
                <div className="box-container">
                    {category.map((c, index) => <div className={c.index <= currentIndex ? "box active" : "box"} key={index}></div>)}
                </div>
            </div>
            <Routes>
                <Route 
                    path="/address" 
                    element={
                    <Address 
                        setCurrentCategory={setCurrentCategory} 
                        setCurrentIndex={setCurrentIndex}
                        />
                    } 
                />
                <Route 
                    path="/workhistory" 
                    element={
                        <WorkHistory 
                        setCurrentCategory={setCurrentCategory} 
                        setCurrentIndex={setCurrentIndex}
                        />
                    } 
                />
                <Route 
                    path="/personal" 
                    element={
                        <PersonalInfo 
                            setCurrentCategory={setCurrentCategory} 
                            setCurrentIndex={setCurrentIndex} 
                        />
                    }
                />
                <Route 
                    path="/education" 
                    element={
                        <Education 
                            setCurrentCategory={setCurrentCategory} 
                            setCurrentIndex={setCurrentIndex} 
                        />
                    }
                />
                <Route 
                    path="/skills" 
                    element={
                        <SkillsAndLanguage 
                            setCurrentCategory={setCurrentCategory} 
                            setCurrentIndex={setCurrentIndex} 
                        />
                    }
                />
                <Route 
                    path="/reference" 
                    element={
                        <Reference 
                            setCurrentCategory={setCurrentCategory} 
                            setCurrentIndex={setCurrentIndex} 
                        />
                    }
                /> 
            </Routes>
        </div>
  </main>;
};

export default CreateResume;
