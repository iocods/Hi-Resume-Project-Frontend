import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";
import AddButton from "../buttons/AddButton";

const AddEducation = ({index}) => {
    const{editResume, setEditResume, addEducationStatus, setAddEducationStatus} = useContext(DataContext);
    const [education, setEducation] = useState(
        {
            collegeName: '',
            fieldOfStudy: '',
            degree: '',
            start: '',
            end: ''
        }
    );
    const addEducationDetails = () => {
        const newEducationDetails = editResume.userEducationDetails;
        newEducationDetails.push(education);
        setEditResume({...editResume, userWorkHistories: newEducationDetails});
        setAddEducationStatus(false);
    }
  return <div>{
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            name="collegName"
            placeholder="College/Institution Name"
            value={education.collegName}
            onChange={(e) => setEducation({...education, [e.target.name]: e.target.value})}
        />
        <input 
            name="fieldOfStudy"
            placeholder="Field Of Study"
            value={education.fieldOfStudy}
            onChange={(e) => setEducation({...education, [e.target.name]: e.target.value})}
        />
        <input 
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={(e) => setEducation({...education, [e.target.name]: e.target.value})} 
        />
        <input 
            name="start"
            placeholder="Start Date"
            value={education.start}
            onChange={(e) => setEducation({...education, [e.target.name]: e.target.value})}
        />
        <input 
            name="end"
            placeholder="End Date"
            value={education.end}
            onChange={(e) => setEducation({...education, [e.target.name]: e.target.value})}
        />
        {/* <ReactQuill value={description} theme='snow' onChange={setDescription}/> */}
        <AddButton onClick={() => {
            addEducationDetails();
        }}/>
    </form>}
  </div>;
};


export default AddEducation;
