import {Routes, Route, useNavigate, Link} from "react-router-dom";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => { 
    const [education, setEducation] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);
    const [newEducationDetails, setNewEducationDetails] = useState({
        startDate: '',
        endDate: '',
        nameOfInstitution: ' ',
        courseOfStudy: ' ',
        degreeType: ' '
    });
    const [newWorkHistory, setNewWorkHistory] = useState({
            companyName: '',
            startDate: '',
            endDate: '',
            role: '',
            roleDescription: ''
    })
    const [reference, setReference] = useState([]);
    const [newReference, setNewReference] = useState({
        fullname: '',
        role: '', 
        company: '',
        email: '',
        tel: ''
    })
    const Navigate = useNavigate();
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [newLanguage, setNewLanguage] = useState('');
    const [languages, setLanguages] = useState([]);

    const addDetails = () => {
        const newEducationList = [...education, newEducationDetails];
        setEducation(newEducationList);
        setNewEducationDetails({...newEducationDetails, degreeType: '', nameOfInstitution: '', courseOfStudy: '', startDate: '', endDate: ''});
    }
    const addWorkDetails = () => {
        const newWorkHistoryList = [...workHistory, newWorkHistory];
        setWorkHistory(newWorkHistoryList);
        setNewWorkHistory({...newWorkHistory, companyName: '', role: '', roleDescription: '', startDate: '', endDate: ''});
    }
    const addSkill = () => {
        if(newSkill == '')
            return;
        const newSkillList = [...skills, newSkill];
        setSkills(newSkillList);
        setNewSkill('');
    }
    const addLanguage = () => {
        if(newLanguage == '')
            return;
        const newLanguageList = [...languages, newLanguage];
        setLanguages(newLanguageList);
        setNewLanguage('');
    }
    const addReference = () => {
        const newReferenceList = [...reference, newReference];
        setReference(newReferenceList);
        setNewReference({...newReference, fullname: '', role: '', company: '', tel: '', email: ''});
    }
    return (
        <DataContext.Provider value={{
            Navigate, addDetails, education, setEducation,
            newEducationDetails, setNewEducationDetails, newWorkHistory, setNewWorkHistory, addSkill, addLanguage, newSkill, setNewSkill, newLanguage, setNewLanguage, skills, setSkills, languages, setLanguages,reference, setReference, newReference, setNewReference, addReference
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;