import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import AddButton from "../buttons/AddButton";
import EditTitle from "../edit/EditTitle";
import EditEducation from "../edit/EditEducation";
import EditWork from "../edit/EditWork";
import EditPersonal from "../edit/EditPersonal";
import EditAddress from "../edit/EditAddress";

const EditResume = () => {
    const{editResume, setEditResume, editTitle, setEditTitle, editPersonalDetails, setEditPersonalDetails, editEducationStatus,setEditEducationStatus, editWorkStatus, setEditWorkStatus, setEditUserInformationStatus, editUserInformationStatus, editAddressStatus, setEditAddressStatus} = useContext(DataContext);
    const updateEducation = (index) => {
        setEditEducationStatus(editEducationStatus.map((stats, position) => (position === index) ? true : false));
    }
    const updateWork = (index) => {
        setEditWorkStatus(editWorkStatus.map((stats, position) => (position === index) ? true : false));
    }
    useEffect(() => {
        const length = editResume.userEducationDetails.length;
        const workLength = editResume.userWorkHistories.length;
        console.log("Reloading from useEffect hook");
        const newEducationStatus = [];
        const newWorkStatus = [];
        for(let i = 0; i < length; i++)   
            newEducationStatus.push(false);
        for(let j = 0; j < workLength; j++)
            newWorkStatus.push(false);
        setEditEducationStatus(newEducationStatus);
        setEditWorkStatus(newWorkStatus);
    }, [])
  return <section>
    <section className="edit-section">
        <div>
            <p>Resume Title</p>
            {!editTitle ?
                <div>
                    <p>{editResume.title}</p>
                    <EditButton onClick={() => setEditTitle(true)} />
                </div>: 
                <EditTitle />
            }
        </div>
        <div>
            <p>Personal Information</p> { !editUserInformationStatus ?
            <div>
                <p>Firstname: {editResume.userInformation.firstname}</p>
                <p>Lastname: {editResume.userInformation.lastname}</p>
                <p>Email: {editResume.userInformation.email}</p>
                <EditButton onClick={(e) => setEditUserInformationStatus(true)}/>
            </div> : 
            <EditPersonal />
            }
        </div>
        <div>
            <p>Current Address</p>{ !editAddressStatus ?
            <div>
                <p>Suite no: {editResume.userAddress.suiteNo}</p>
                <p>Address: {editResume.userAddress.address}</p>
                <p>City {editResume.userAddress.city}</p>
                <p>Province/State: {editResume.userAddress.province}</p>
                <p>Country: {editResume.userAddress.country}</p>
                <EditButton onClick={() => setEditAddressStatus(true)}/>
            </div>: <EditAddress />}
        </div>
        <div>
            <div className="category-details"><p>Education Details</p> <AddButton /></div>
            {editResume.userEducationDetails.map((education, index) => !editEducationStatus[index] ? <div key={index}>
                {console.log(`${index}.Education Details  ${editEducationStatus[index]}`)}
                <p>College/Institution Name: {education.collegeName}</p>
                <p>Field Of Study: {education.field}</p>
                <p>Degree: {education.degree}</p>
                <p>Start Date: {education.start}</p>
                <p>End Date: {education.end}</p>
                <EditButton onClick={() => updateEducation(index)}/> 
                <DeleteButton />
            </div> : <EditEducation key={index} index={index}/>)}
        </div>
        <div>
            <div className="category-details"><p>Work History</p> <AddButton /></div>
            {editResume.userWorkHistories.map((work, index) => !editWorkStatus[index] ? <div key={index}>
                <p>Company Name: {work.companyName}</p>
                <p>Role: {work.role}</p>
                <p>Role Description: {work.description}</p>
                <p>Start Date: {work.start}</p>
                <p>End Date: {work.end}</p>
                <EditButton onClick={() => updateWork(index)}/> 
                <DeleteButton />
            </div>: <EditWork key={index} index={index}/>
            )}
        </div>
    </section>
    <section></section>
  </section>;
};

export default EditResume;
