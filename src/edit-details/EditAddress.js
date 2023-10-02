import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import UpdateButton from "../buttons/UpdateButton";

const EditAddress = () => {
    const {editResume, setEditResume, editAddressStatus, setEditAddressStatus} = useContext(DataContext);
    const [editAddress, setEditAddress] = useState(editResume.userAddress);
    const updateAddress = () => {
        setEditResume({...editResume, userAddress: editAddress})
        setEditAddressStatus(false);
    };
  return <div>
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            name="suiteNumber"
            placeholder="Suite Number"
            value={editAddress.suiteNo}
            onChange={(e) => setEditAddress({...editAddress, [e.target.name]: e.target.value})}
        />
        <input 
            name="street"
            placeholder="Street"
            value={editAddress.street}
            onChange={(e) => setEditAddress({...editAddress, [e.target.name]: e.target.value})}
        />
        <input 
            name="city"
            placeholder="City"
            value={editAddress.city}
            onChange={(e) => setEditAddress({...editAddress, [e.target.name]: e.target.value})}
        />
        <input 
            name="city"
            placeholder="Province / State"
            value={editAddress.city}
            onChange={(e) => setEditAddress({...editAddress, [e.target.name]: e.target.value})}
        />
        <input 
            name="country"
            placeholder="Country"
            value={editAddress.country}
            onChange={(e) => setEditAddress({...editAddress, [e.target.name]: e.target.value})}
        />
        <UpdateButton onClick={() => {
            updateAddress();
        }}/>

    </form>
  </div>;
};

export default EditAddress;
