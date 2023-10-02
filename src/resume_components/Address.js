import {React, useContext, useEffect, useState}from "react";
import { TextField, Button } from "@mui/material";
import {useStoreState, useStoreActions} from 'easy-peasy';
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";


const Address = ({title, setIsCreated, setCurrentCategory, setCurrentIndex}) => {
    const address = useStoreState(states => states.address);
    const setAddress = useStoreActions(actions => actions.setAddress);
    const formStyle = useStoreState(states => states.style);
    const token = useStoreState(states => states.userHeader);
    console.log(`Title found in state is ${title}`);
    const AUTH_URL = `http://localhost:8080/resume/my-profile/${title}/address`;
    const{newResume, setNewResume, isMounted, setIsMounted} = useContext(DataContext);
    const Navigate = useNavigate();
    useEffect(() => {
        !isMounted && console.log('setting is mounted');
        setCurrentCategory("Current Address");
        setCurrentIndex(1);
        setIsMounted(true);
    }, []);
    const saveAddress = async () => {
        let response = null;
        const requestObject = {
            method: 'POST',
            body: JSON.stringify(address),
            headers: {'Content-Type': 'application/json',
                      'Authorization': sessionStorage.getItem('jwt')
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
        finally{
            Navigate(`/resume/education`, {replace: true});
        }
    }
  return <form onSubmit={(e) => e.preventDefault()}>
  <div>
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
            name='street'
            value={address.street}
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
        <div>
            <Button
                onClick={() => {
                    Navigate('/resume/personal', {replace: true})
                    }}>
                Prev
            </Button>
            <Button
                onClick={
                    () => {
                        Navigate(`/resume/education`, {replace: true})
                    }
                }
            > 
                Next
            </Button>
        </div>
    </div>
  </form>;
};

export default Address;
