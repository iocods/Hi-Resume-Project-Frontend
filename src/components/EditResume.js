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
import EditReference from "../edit/EditReference";

const EditResume = () => {
    const{editResume, setEditResume, editTitle, setEditTitle, editPersonalDetails, setEditPersonalDetails, editEducationStatus,setEditEducationStatus, editWorkStatus, setEditWorkStatus, setEditUserInformationStatus, editUserInformationStatus, editAddressStatus, setEditAddressStatus, editReferenceStatus, setEditReferenceStatus} = useContext(DataContext);
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
    useEffect(() => {
        console.log("Reloading from useEffect hook");
        updateStatus();
    }, [])
  return <section>
    <section className="edit-section">
        <div>
            <p>Resume Title</p>
            {!editTitle ?
                <div>
                    <p>Title: {editResume.title}</p>
                    <EditButton onClick={(e) => setEditTitle(true)} />
                </div> : 
                <EditTitle />
            }
        </div>
        <div>
            <p>Personal Information</p> { !editUserInformationStatus ?
            <div>
                <p>Firstname: {editResume.userInformation.firstname ? editResume.userInformation.firstname : ''}</p>
                <p>Lastname: {editResume.userInformation.lastname ? editResume.userInformation.lastname: ''}</p>
                <p>Email: {editResume.userInformation.email ? editResume.userInformation.email : ''}</p>
                <EditButton onClick={(e) => setEditUserInformationStatus(true)}/>
            </div> : 
            <EditPersonal />
            }
        </div>
        <div>
            <p>Current Address</p>{editResume.userAddress && !editAddressStatus ?
            <div>
                <p>Suite no: {editResume.userAddress.suiteNo ? editResume.userAddress.suiteNo: ''}</p>
                <p>Address: {editResume.userAddress.address ? editResume.userAddress.address : ''}</p>
                <p>City {editResume.userAddress.city ? editResume.userAddress.city : ''}</p>
                <p>Province/State: {editResume.userAddress.province ? editResume.userAddress.province : ''}</p>
                <p>Country: {editResume.userAddress.country ? editResume.userAddress.country : ''}</p>
                <EditButton onClick={() => setEditAddressStatus(true)}/>
            </div>: <EditAddress />}
        </div>
        <div>
            <div className="category-details"><p>Education Details</p> <AddButton /></div>
            {editResume.userEducationDetails && editResume.userEducationDetails.map((education, index) => !editEducationStatus[index] ? <div key={index}>
                <p>College/Institution Name: {education.collegeName}</p>
                <p>Field Of Study: {education.field}</p>
                <p>Degree: {education.degree}</p>
                <p>Start Date: {education.start}</p>
                <p>End Date: {education.end}</p>
                <EditButton onClick={() => updateEducation(index)}/> 
                <DeleteButton onClick={() => deleteEducation(index)}/>
            </div> : <EditEducation key={index} index={index}/>)}
        </div>
        <div>
            <div className="category-details"><p>Work History</p> <AddButton /></div>
            {editResume.userWorkHistories && editResume.userWorkHistories.map((work, index) => !editWorkStatus[index] ? <div key={index}>
                <p>Company Name: {work.companyName}</p>
                <p>Role: {work.role}</p>
                <p>Role Description: {work.description}</p>
                <p>Start Date: {work.start}</p>
                <p>End Date: {work.end}</p>
                <EditButton onClick={() => updateWork(index)}/> 
                <DeleteButton onClick={() => deleteWork(index)}/>
            </div>: <EditWork key={index} index={index}/>
            )}
        </div>
        <div>
            <div className="category-details"><p>Reference</p> <AddButton /></div>
            {editResume.userReference.map((ref, index) => !editReferenceStatus[index] ? <div key={index}>
                <p>Referee Name: {ref.referenceName}</p>
                <p>Referee Role: {ref.referenceRole}</p>
                <p>Referee Organization: {ref.referenceCompanyName}</p>
                <p>Referee Email: {ref.referenceEmail}</p>
                <p>Referee Tel: {ref.referenceTel}</p>
                <EditButton onClick={() => updateReference(index)}/> 
                <DeleteButton onClick={() => deleteReference(index)}/>
            </div> : <EditReference key={index} index={index}/> 
            )}
        </div>
    </section>
    <section></section>
  </section>;
};

export default EditResume;
