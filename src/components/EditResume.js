import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import AddButton from "../buttons/AddButton";
import EditTitle from "../edit-details/EditTitle";
import EditEducation from "../edit-details/EditEducation";
import EditWork from "../edit-details/EditWork";
import EditPersonal from "../edit-details/EditPersonal";
import EditAddress from "../edit-details/EditAddress";
import EditReference from "../edit-details/EditReference";
import AddWork from "../add-details/AddWork";
import AddEducation from "../add-details/AddEducation";
import AddReference from "../add-details/AddReference";
import UpdateButton from "../buttons/UpdateButton";

const EditResume = () => {
    const{editResume, editTitle, setEditTitle, editEducationStatus, setEditEducationStatus, editWorkStatus, setEditWorkStatus, setEditUserInformationStatus, editUserInformationStatus, editAddressStatus, setEditAddressStatus, editReferenceStatus, setEditReferenceStatus, updateEducation, updateWork, updateReference, deleteEducation, deleteWork, deleteReference, updateStatus, addWorkStatus, setAddWorkStatus, addEducationStatus, setAddEducationStatus,addReferenceStatus, setAddReferenceStatus, updateResume} = useContext(DataContext);
    
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
                <p>Suite no: {editResume.userAddress.suiteNumber ? editResume.userAddress.suiteNumber: ''}</p>
                <p>Address: {editResume.userAddress.street ? editResume.userAddress.street : ''}</p>
                <p>City {editResume.userAddress.city ? editResume.userAddress.city : ''}</p>
                <p>Province/State: {editResume.userAddress.state ? editResume.userAddress.state : ''}</p>
                <p>Country: {editResume.userAddress.country ? editResume.userAddress.country : ''}</p>
                <EditButton onClick={() => setEditAddressStatus(true)}/>
            </div>: <EditAddress />}
        </div>
        <div>{
                !addEducationStatus ?
                <div className="category-details"><p>Education Details</p> 
                {console.log(editResume.userEducationDetails)}
                <AddButton onClick={() => setAddEducationStatus(!addEducationStatus)}/></div> :
                <AddEducation />
            }
            {editResume.userEducationDetails && editResume.userEducationDetails.map((education, index) => !editEducationStatus[index] ? <div key={index}>
                <p>College/Institution Name: {education.institutionName}</p>
                <p>Field Of Study: {education.courseOfStudy}</p>
                <p>Degree: {education.degreeType}</p>
                <p>Start Date: {education.startDate}</p>
                <p>End Date: {education.endDate}</p>
                <EditButton onClick={() => updateEducation(index)}/> 
                <DeleteButton onClick={() => deleteEducation(index)}/>
            </div> : <EditEducation key={index} index={index}/>)}
        </div>
        <div>{
                !addWorkStatus ?
                <div className="category-details"><p>Work History</p> <AddButton onClick={() => {
                    console.log('setting to true'); 
                    setAddWorkStatus(true)}}/></div>:
                <AddWork/>
            }
            {
                editResume.userWorkHistories && editResume.userWorkHistories.map((work, index) => !editWorkStatus[index] ? <div key={index}>
                    <p>Company Name: {work.companyName}</p>
                    <p>Company Address: {work.companyAddress}</p>
                    <p>Role: {work.role}</p>
                    <p>Role Description: {work.roleDescription}</p>
                    <p>Start Date: {work.startDate}</p>
                    <p>End Date: {work.endDate}</p>
                    <EditButton onClick={() => updateWork(index)}/> 
                    <DeleteButton onClick={() => deleteWork(index)}/>
                </div>: <EditWork key={index} index={index}/>
            )}
        </div>
        <div>{ !addReferenceStatus ?
                <div className="category-details"><p>Reference</p> <AddButton onClick={() => setAddReferenceStatus(true)}/></div>:
                <AddReference />
            }
            {
                editResume.userReference.map((ref, index) => !editReferenceStatus[index] ? 
                <div key={index}>
                    <p>Referee Name: {ref.fullname}</p>
                    <p>Referee Role: {ref.role}</p>
                    <p>Referee Organization: {ref.company}</p>
                    <p>Referee Email: {ref.email}</p>
                    <p>Referee Tel: {ref.tel}</p>
                    <EditButton onClick={() => updateReference(index)}/> 
                    <DeleteButton onClick={() => deleteReference(index)}/>
                </div> : 
                <EditReference key={index} index={index}/> 
            )}
        </div>
        <UpdateButton text={"Resume"} onClick={() => updateResume()}/>
    </section>
    <section></section>
  </section>;
};

export default EditResume;