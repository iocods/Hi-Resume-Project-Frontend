import React, {useContext, useState} from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";

const EditReference = ({index}) => {
    const{editResume, setEditResume, editReferenceStatus, setEditReferenceStatus} = useContext(DataContext);
    const [reference, setReference] = useState(editResume.userReference[index]);
    const updateReference = () => {
        const newUserReference = editResume.userReference.map((e, position) => (
            (position === index) ? reference :  e)
        )
        setEditResume({...editResume, userReference: newUserReference});
        setEditReferenceStatus(editReferenceStatus.map((stats, position) => false));
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
        <UpdateButton onClick={() => updateReference()}/>
    </form>
  </div>;
};

export default EditReference;
