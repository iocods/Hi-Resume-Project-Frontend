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
            name="fullname"
            placeholder="Fullname"
            required={true}
            value={reference.fullname}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="company"
            placeholder="Organization"
            required={true}
            value={reference.company}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="role"
            placeholder="Role"
            required={true}
            value={reference.role}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="email"
            placeholder="Email"
            required={true}
            value={reference.email}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <input 
            name="tel"
            placeholder="Tel"
            required={true}
            value={reference.tel}
            onChange={(e) => setReference({...reference, [e.target.name]: e.target.value})}
        />
        <UpdateButton onClick={() => updateReference()}/>
    </form>
  </div>;
};

export default EditReference;
