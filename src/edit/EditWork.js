import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";
import MyQuillEditor from "../components/MyQuillEditor";
import ReactQuill from "react-quill";
import 'quill/dist/quill.snow.css';


const EditWork = ({index}) => {
    const{editResume, setEditResume, editWorkStatus, setEditWorkStatus} = useContext(DataContext);
    const [editWork, setEditWork] = useState(editResume.userWorkHistories[index]);
    const [description, setDescription] = useState(editWork.description);
    const updateWork = () => {
        console.log(`Descriptions : ${description}`);
        const newWorkHistories = editResume.userWorkHistories.map((w, position) => (
            (position === index) ? editWork :  w)
        )
        newWorkHistories.description = description;
        setEditResume({...editResume, userWorkHistories: newWorkHistories});
        setTimeout(() => 
        setEditWorkStatus(editWorkStatus.map((stats, position) => false)), 0);
    }
  return <div>{
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            name="companyName"
            placeholder="Company Name"
            value={editWork.companyName}
            onChange={(e) => setEditWork({...editWork, [e.target.name]: e.target.value})}
        />
        <input 
            name="role"
            placeholder="Role/Responsibilities"
            value={editWork.role}
            onChange={(e) => setEditWork({...editWork, [e.target.name]: e.target.value})}
        />
        <input 
            name="start"
            placeholder="Start Date"
            value={editWork.start}
            onChange={(e) => setEditWork({...editWork, [e.target.name]: e.target.value})}
        />
        <input 
            name="end"
            placeholder="End Date"
            value={editWork.end}
            onChange={(e) => setEditWork({...editWork, [e.target.name]: e.target.value})}
        />
        {/* <ReactQuill value={description} theme='snow' onChange={setDescription}/> */}
        <textarea 
            name="description"
            placeholder="Describe Your Role"
            value={editWork.description}
            onChange={(e) => setEditWork({...editWork, [e.target.name]: e.target.value})} />
        <UpdateButton onClick={() => {
            updateWork();
        }}/>
    </form>}
  </div>;
};

export default EditWork;
