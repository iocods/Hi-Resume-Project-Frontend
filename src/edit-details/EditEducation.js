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
        setEditResume({...editResume, userEducationDetails: newEducationDetails});
        setEditEducationStatus(editEducationStatus.map((stats, position) => false));
    }
  return <div>
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            name="collegeName"
            required
            placeholder="College Name"
            value={editEducation.collegeName}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="degree"
            required
            placeholder="Degree"
            value={editEducation.degree}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="field"
            required
            placeholder="Field"
            value={editEducation.field}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="start"
            required
            placeholder="Start Date"
            value={editEducation.start}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <input 
            name="end"
            required
            placeholder="End Date"
            value={editEducation.end}
            onChange={(e) => setEditEducation({...editEducation, [e.target.name]: e.target.value})}
        />
        <UpdateButton type="submit" onClick={() => {
            updateEducation();
        }}/>
    </form>
  </div>;
};

export default EditEducation;
