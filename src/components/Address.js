import React from "react";
import { TextField, Button } from "@mui/material";
import {useStoreState, useStoreActions} from 'easy-peasy';

const Address = () => {
    const address = useStoreState(states => states.address);
    const setAddress = useStoreActions(actions => actions.setAddress);
    const formStyle = useStoreState(states => states.style);
    const token = useStoreState(states => states.userHeader);
    const AUTH_URL = 'http://localhost:8080/resume/profile/'
    const saveAddress = async (addressDetails) => {
        let response = null;
        const requestObject = {
            method: 'POST',
            body: JSON.stringify(addressDetails),
            headers: {'Content-Type': 'application/json',
                      'Authorization': token
                    }
        }
        try{
            response = await fetch(AUTH_URL, requestObject);
            if(!response.ok) throw Error("Invalid Username or Password");
            console.log(response);
        }
        catch(error){
            console.log(error.message);
        }
    }
  return <form onSubmit={(e) => e.preventDefault()} className="user-details" style={formStyle}>
  <div className="login-credentials-container">
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='Suite No'
            inputProps={{style: {
                height: '8px'
            }}}
            name='suiteNumber'
            type="number"
            value={address.suiteNumber}
            color="primary"
            onChange={(e) => {
                setAddress({...address, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Address'
            inputProps={{style: {
                height: '8px'
            }}}
            name='streetName'
            value={address.streetName}
            color="primary"
            onChange={(e) => {
                setAddress({...address, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='City'
            inputProps={{style: {
                height: '8px'
            }}}
            name='city'
            value={address.city}
            color="primary"
            onChange={(e) => {
                setAddress({...address, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='State'
            inputProps={{style: {
                height: '8px'
            }}}
            name='state'
            value={address.state}
            color="primary"
            onChange={(e) => {
                setAddress({...address, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='Postal Code'
            inputProps={{style: {
                height: '8px'
            }}}
            name='postalCode'
            value={address.postalCode}
            color="primary"
            onChange={(e) => {
                setAddress({...address, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Country'
            inputProps={{style: {
                height: '8px'
            }}}
            name='country'
            value={address.country}
            color="primary"
            onChange={(e) => {
                setAddress({...address, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <Button
            onClick={() => saveAddress()}
        > 
            Save
        </Button>
    </div>
  </form>;
};

export default Address;
