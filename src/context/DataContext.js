import {Routes, Route, useNavigate, Link} from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const DataContext = createContext({});

export const DataProvider = ({ children }) => { 
    const RESUME_URL = 'http://localhost:8080/resume/my-profile';
    const [education, setEducation] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);
    /** States and methods for Editing a Resume or Cv */
    const[title, setTitle] = useState('');
    const[editTitle, setEditTitle] = useState(false);
    const[editEducationStatus, setEditEducationStatus] = useState([]);
    const[editUserInformationStatus, setEditUserInformationStatus] = useState(false);
    const[editWorkStatus, setEditWorkStatus] = useState([]);
    const[editReferenceStatus, setEditReferenceStatus] = useState([]);
    const[editAddressStatus, setEditAddressStatus] = useState(false);

    const [newResume, setNewResume] = useState({})

    /**States For Adding new Details when editing the Resume */
    const [addWorkStatus, setAddWorkStatus] = useState(false);

    /** States and methods for the different link in the headers */
    const [showCvLink, setShowCvLink] = useState(false);
    const [showCoverLetterLink, setShowCoverLetterLink] = useState(false);
    const [showResumeLink, setShowResumeLink] = useState(false);
    const [editPersonalDetails, setEditPersonalDetails] = useState({
            firstname: 'Terry',
            lastname: 'Okoro',
            email: 'Terry@gmail.com'
        })
    const [editResume, setEditResume] = useState({
        title: 'Title Not Available',
        userInformation: {
            firstname: 'Terry',
            lastname: 'Okoro',
            email: 'Terry@gmail.com'
        },
        userAddress: {
            suiteNumber: 7,
            street: 'Tony Johnson off ong highway',
            city: 'Vegas City',
            state: 'California',
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
        }],
        userReference: [
            {
                fullname: '',
                role: '',
                company: '',
                email: '',
                tel: ''
            }
        ]
    });
    
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
        institutionName: ' ',
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
        console.log(`Adding Education Details!`);
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
    const [resume, setResume] = useState([[{
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
    ]]);
    const onCreateFinish = async () => {
        const resume = {
            title: title,
            userInformation: personalDetails,
            userEducationDetails: education,
            userWorkHistories: workHistory,
            userAddress: address,
            skills: skills,
            languages: languages,
            userReference: reference
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
    const updateEducation = (index) => {
        setEditEducationStatus(editEducationStatus.map((stats, position) => (position === index) ? true : false));
    }
    const updateWork = (index) => {
        setEditWorkStatus(editWorkStatus.map((stats, position) => (position === index) ? true : false));
    }
    const updateReference = (index) => {
        console.log("Updating Reference");
        console.log(`${index}`)
        setEditReferenceStatus(editReferenceStatus.map((stats, position) => (position === index) ? true : false));
    }
    const deleteEducation = (index) => {
        const newEducationDetails = editResume.userEducationDetails.filter((_, position) => position !== index);
        setEditResume({...editResume, userEducationDetails: newEducationDetails});
    }
    const deleteWork = (index) => {
        const newWorkHistories = editResume.userWorkHistories.filter((_, position) => position !== index);
        setEditResume({...editResume, userWorkHistories: newWorkHistories});
    }
    const deleteReference = (index) => {
        const newReference = editResume.userReference.filter((_, position) => position !== index);
        setEditResume({...editResume, userReference: newReference});
    }
    function updateStatus() {
        const length = editResume.userEducationDetails.length;
        const workLength = editResume.userWorkHistories.length;
        const refLength = editResume.userReference.length;
        const newEducationStatus = [];
        const newWorkStatus = [];
        const newRefStatus = [];
        for(let i = 0; i < length; i++)   
            newEducationStatus.push(false);
        for(let j = 0; j < workLength; j++)
            newWorkStatus.push(false);
        for(let i = 0; i < refLength; i++)
            newRefStatus.push(false);
        setEditEducationStatus(newEducationStatus);
        setEditWorkStatus(newWorkStatus);
        setEditReferenceStatus(newRefStatus);
    }
    const [addEducationStatus, setAddEducationStatus] = useState(false);
    const [addReferenceStatus, setAddReferenceStatus] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    return (
        <DataContext.Provider value={{
            Navigate, addDetails, education, setEducation, newEducationDetails, setNewEducationDetails, 
            newWorkHistory, setNewWorkHistory, addSkill, addLanguage, newSkill, setNewSkill, newLanguage, setNewLanguage, skills, setSkills, languages, setLanguages,reference, setReference, newReference, setNewReference, addReferee, personalDetails, setPersonalDetails, resume, setResume, onCreateFinish,showCvLink, setShowCvLink, showResumeLink, setShowResumeLink, showCoverLetterLink, setShowCoverLetterLink, onResumeButtonClick, onCoverLetterButtonClick, onCvButtonClick, setDropDownFalse, editResume, setEditResume, editTitle, setEditTitle, editPersonalDetails, setEditPersonalDetails, editEducationStatus, setEditEducationStatus, editWorkStatus, setEditWorkStatus,editUserInformationStatus, setEditUserInformationStatus, editAddressStatus, setEditAddressStatus, editReferenceStatus, setEditReferenceStatus, updateEducation, updateWork, updateReference, deleteEducation, deleteWork, deleteReference, updateStatus, setAddWorkStatus, addWorkStatus, addEducationStatus, setAddEducationStatus, addReferenceStatus, setAddReferenceStatus, isMounted, setIsMounted, addWorkDetails, title, setTitle
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;