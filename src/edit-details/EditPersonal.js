import React, {useContext, useState} from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";

const EditPersonal = () => {
    const{editResume, setEditResume, editUserInfomationStatus, setEditUserInformationStatus} = useContext(DataContext);
    const [editUserInfomation, setEditUserInfomation] = useState(editResume.userInformation);
    const updateUserInformation = () => {
        setEditResume({...editResume, userInformation: editUserInfomation});
        setTimeout(() => (setEditUserInformationStatus(false)), 0);
    }
  return <div>
    <form onSubmit={e => e.preventDefault()}>
        <input 
            name="firstname"
            placeholder="Firstname"
            required={true}
            value={editUserInfomation.firstname}
            onChange={(e) => setEditUserInfomation({...editUserInfomation, [e.target.name]: e.target.value})}
        />
        <input 
            name="lastname"
            placeholder="Lastname"
            required={true}
            value={editUserInfomation.lastname}
            onChange={(e) => setEditUserInfomation({...editUserInfomation, [e.target.name]: e.target.value})}
        />
        <input 
            name="email"
            placeholder="Email"
            required={true}
            value={editUserInfomation.email}
            onChange={(e) => setEditUserInfomation({...editUserInfomation, [e.target.name]: e.target.value})}
        />
        <UpdateButton onClick={() => updateUserInformation()}/>
    </form>
  </div>;
};

export default EditPersonal;
