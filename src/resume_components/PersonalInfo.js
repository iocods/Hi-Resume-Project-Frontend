import {React, useEffect} from "react";
import { TextField, Button } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import { AgInputTextField } from "ag-grid-community";

const PersonalInfo = ({setCurrentCategory, setCurrentIndex}) => {
  const personalDetails = useStoreState(state => state.personalDetails);
  const setPersonalDetails = useStoreActions(actions => actions.setPersonalDetails);
  const Navigate = useNavigate();
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
            name='state'
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
