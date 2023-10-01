import React, {useContext, useState} from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";
import AddButton from "../buttons/AddButton";

const AddReference = ({index}) => {
    const{editResume, setEditResume, addReferenceStatus, setAddReferenceStatus} = useContext(DataContext);
    const [reference, setReference] = useState({
        referenceName: '',
        referenceCompanyName: '',
        referenceRole: '',
        referenceEmail: '',
        referenceTel: ''
    });
    const addReference = () => {
        const newUserReference = editResume.userReference;
        newUserReference.push(reference);
        setEditResume({...editResume, userReference: newUserReference});
        setAddReferenceStatus(false);
    }
  return <div>
    <form onSubmit={e => e.preventDefault()}>
        <input 
            name="referenceName"
            placeholder="Fullname"
            required={true}
            value={reference.referenceName}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="referenceCompanyName"
            placeholder="Organization"
            required={true}
            value={reference.referenceCompanyName}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="referenceRole"
            placeholder="Role"
            required={true}
            value={reference.referenceRole}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="referenceEmail"
            placeholder="Email"
            required={true}
            value={reference.referenceEmail}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="referenceTel"
            placeholder="Tel"
            required={true}
            value={reference.referenceTel}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <AddButton onClick={() => addReference()}/>
    </form>
  </div>;
};

export default AddReference;
