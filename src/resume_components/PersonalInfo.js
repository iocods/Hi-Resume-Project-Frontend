import {React, useEffect, useContext} from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const PersonalInfo = ({setCurrentCategory, setCurrentIndex}) => {
  const {personalDetails, setPersonalDetails, Navigate, title, setTitle} = useContext(DataContext);
  useEffect(() => {
    setCurrentCategory("Personal Information");
    setCurrentIndex(0);
  }, [])
  return <form onSubmit={(e) => e.preventDefault()}>
     <div>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Title'
            inputProps={{style: {
              height: '8px'
            }}}
            name='title'
            value={title}
            color="primary"
            onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <br />
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Firstname'
            inputProps={{style: {
              height: '8px'
            }}}
            name='firstname'
            value={personalDetails.firstname}
            color="primary"
            onChange={(e) => {
              setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            style={{width: "90%", margin: 10}}
            label='Middle Name'
            inputProps={{style: {
                height: '8px'
            }}}
            name='middleName'
            value={personalDetails.middleName}
            color="primary"
            onChange={(e) => {
                setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Lastname'
            inputProps={{style: {
              height: '8px'
            }}}
            name='lastname'
            value={personalDetails.lastname}
            color="primary"
            onChange={(e) => {
              setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="email"
            label='Email Address'
            inputProps={{style: {
                height: '8px'
            }}}
            name='email'
            value={personalDetails.email}
            color="primary"
            onChange={(e) => {
                setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            style={{width: "90%", margin: 10}}
            label='Linkedln Profile'
            inputProps={{style: {
                height: '8px'
            }}}
            name='linkedln'
            value={personalDetails.linkedln}
            color="primary"
            onChange={(e) => {
              setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <div>
            <Button
              onClick={() => Navigate('/resume/address', {replace: true})}
            > 
                Next
            </Button>
        </div>
    </div>
  </form>;
};

export default PersonalInfo;
