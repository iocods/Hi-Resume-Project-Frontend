import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import AddButton from "../buttons/AddButton";


const AddWork = () => {
    const{editResume, setEditResume, addWorkStatus, setAddWorkStatus} = useContext(DataContext);
    const [addWork, setAddWork] = useState(
        {
            companyName: '',
            role: '',
            description: '',
            start: '',
            end: ''
        }
    );
    const addWorkHistory = () => {
        const newWorkHistories = editResume.userWorkHistories;
        newWorkHistories.push(addWork);
        setEditResume({...editResume, userWorkHistories: newWorkHistories});
        setAddWorkStatus(false);
    }
  return <div>{
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            name="companyName"
            placeholder="Company Name"
            value={addWork.companyName}
            onChange={(e) => setAddWork({...addWork, [e.target.name]: e.target.value})}
        />
        <input 
            name="role"
            placeholder="Role/Responsibilities"
            value={addWork.role}
            onChange={(e) => setAddWork({...addWork, [e.target.name]: e.target.value})}
        />
        <input 
            name="start"
            placeholder="Start Date"
            value={addWork.start}
            onChange={(e) => setAddWork({...addWork, [e.target.name]: e.target.value})}
        />
        <input 
            name="end"
            placeholder="End Date"
            value={addWork.end}
            onChange={(e) => setAddWork({...addWork, [e.target.name]: e.target.value})}
        />
        {/* <ReactQuill value={description} theme='snow' onChange={setDescription}/> */}
        <textarea 
            name="description"
            placeholder="Describe Your Role"
            value={addWork.description}
            onChange={(e) => setAddWork({...addWork, [e.target.name]: e.target.value})} />
        <AddButton onClick={() => {
            addWorkHistory();
        }}/>
    </form>}
  </div>;
};

export default AddWork;
