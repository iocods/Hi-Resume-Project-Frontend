import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";

const EditTitle = () => {
    const {editResume, setEditResume, editTitle, setEditTitle} = useContext(DataContext);
  return <div>
    <form className="edit-title" onSubmit={(e) => e.preventDefault()}>
        <input 
            name="title"
            required
            placeholder="Title"
            value={editResume.title}
            onChange={(e) => setEditResume({...editResume, [e.target.name]: e.target.value})}
        />
        <UpdateButton onClick={() => setTimeout(() => setEditTitle(false), 0)}/>
    </form>
  </div >;
};

export default EditTitle;