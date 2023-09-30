import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";

const EditTitle = () => {
    const {editResume, setEditResume, editTitle, setEditTitle} = useContext(DataContext);
  return <div>
    { editResume.title &&
    <form className="edit-title" onSubmit={(e) => e.preventDefault()}>
        <input 
            name="title"
            value={editResume.title}
            onChange={(e) => setEditResume({...editResume, [e.target.name]: e.target.value})}
        />
        <UpdateButton onClick={(e) => setEditTitle(false)}/>
    </form>}
  </div >;
};

export default EditTitle;