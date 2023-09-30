import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";

const EditEducation = ({index}) => {
    const{editResume, setEditResume, editEducationStatus, setEditEducationStatus} = useContext(DataContext);
    const [editEducation, setEditEducation] = useState(editResume.userEducationDetails[index]);
    const updateEducation = () => {
        const newEducationDetails = editResume.userEducationDetails.map((e, position) => (
            (position === index) ? editEducation :  e)
        )
        console.log(`1. ${JSON.stringify(editResume)}`);
        setEditResume({...editResume, userEducationDetails: newEducationDetails});
        console.log(`2. ${JSON.stringify(editResume)}`);
        console.log("updated the details successfully!");
        setEditEducationStatus(editEducationStatus.map((stats, position) => false));
    }
  return <div>
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            name="collegeName"
            placeholder="College Name"
            value={editEducation.collegeName}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="degree"
            placeholder="Degree"
            value={editEducation.degree}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="Field Of study"
            placeholder="Field"
            value={editEducation.field}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="start"
            placeholder="Start Date"
            value={editEducation.start}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="end"
            placeholder="End Date"
            value={editEducation.end}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <UpdateButton onClick={() => {
            updateEducation();
        }}/>
    </form>
  </div>;
};

export default EditEducation;
