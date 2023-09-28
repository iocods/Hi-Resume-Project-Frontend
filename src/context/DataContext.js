import {Routes, Route, useNavigate, Link} from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const DataContext = createContext({});

export const DataProvider = ({ children }) => { 
    const RESUME_URL = 'http://localhost:8080/resume/my-profile';
    const [education, setEducation] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);

    /** States and methods for the different link in the headers */
    const [showCvLink, setShowCvLink] = useState(false);
    const [showCoverLetterLink, setShowCoverLetterLink] = useState(false);
    const [showResumeLink, setShowResumeLink] = useState(false);

    
    const onResumeButtonClick = () => {
        !showResumeLink ? setShowResumeLink(true): setShowResumeLink(false);
        setShowCvLink(false);
        setShowCoverLetterLink(false);
    }
    const onCvButtonClick = () => {
        !showCvLink ? setShowCvLink(true): setShowCvLink(false);
        setShowResumeLink(false);
        setShowCoverLetterLink(false);

    }
    const onCoverLetterButtonClick = () => {
        !showCoverLetterLink ? setShowCoverLetterLink(true): setShowCoverLetterLink(false);
        setShowResumeLink(false);
        setShowCvLink(false);
    }

    const setDropDownFalse = () => {
        console.log('Collapsing all drop down entities');
        setShowResumeLink(false);
        setShowCvLink(false);
        setShowCoverLetterLink(false);
    }
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
    const [personalDetails, setPersonalDetails] = useState({
        firstname: '', 
        middleName: '',
        lastname: '',
        email: '',
        linkedln: '',
        tel: ''
    })
    const Navigate = useNavigate();
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [newLanguage, setNewLanguage] = useState('');
    const [languages, setLanguages] = useState([]);
    const address = useStoreState(state => state.address)

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
    const addReferee = () => {
        const newReferenceList = [...reference, newReference];
        setReference(newReferenceList);
        setNewReference({...newReference, fullname: '', role: '', company: '', tel: '', email: ''});
    }
    const [resume, setResume] = useState({
        userInfo: personalDetails,
        userEducation: education,
        userWork: workHistory,
        userSkill: skills,
        userLanguage: languages,
        userReferee: reference
    });
    const onCreateFinish = async () => {
        const resume = {
            personalDetails: personalDetails,
            educationDetails: education,
            history: workHistory,
            address: address,
            skills: skills,
            languages: languages,
            reference: reference
        };
        let response = null;
        const requestObject = {
            method: 'POST',
            body: JSON.stringify(resume),
            headers: {'Content-Type': 'application/json',
                      'Authorization': sessionStorage.getItem('jwt')
                    }
        }
        try{
            response = await fetch(RESUME_URL, requestObject);
            if(!response.ok) throw Error("Invalid Username or Password");
            console.log(response);

        }
        catch(error){
            console.log(error.message);
        }
        finally{
            Navigate(`/`, {replace: true});
        }
    }
    return (
        <DataContext.Provider value={{
            Navigate, addDetails, education, setEducation, newEducationDetails, setNewEducationDetails, 
            newWorkHistory, setNewWorkHistory, addSkill, addLanguage, newSkill, setNewSkill, newLanguage, setNewLanguage, skills, setSkills, languages, setLanguages,reference, setReference, newReference, setNewReference, addReferee, personalDetails, setPersonalDetails, resume, setResume, onCreateFinish,
            showCvLink, setShowCvLink, showResumeLink, setShowResumeLink, showCoverLetterLink, setShowCoverLetterLink, onResumeButtonClick, onCoverLetterButtonClick, onCvButtonClick, setDropDownFalse
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;