import {React, useEffect} from "react";
import { TextField, Button } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";

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
            label='Suite No'
            inputProps={{style: {
              height: '8px'
            }}}
            name='suiteNumber'
            type="number"
            value={personalDetails.suiteNumber}
            color="primary"
            onChange={(e) => {
              setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='personalDetails'
            inputProps={{style: {
              height: '8px'
            }}}
            name='streetName'
            value={personalDetails.street}
            color="primary"
            onChange={(e) => {
              setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
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
            value={personalDetails.city}
            color="primary"
            onChange={(e) => {
                setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
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
            value={personalDetails.state}
            color="primary"
            onChange={(e) => {
                setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
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
            value={personalDetails.postalCode}
            color="primary"
            onChange={(e) => {
              setPersonalDetails({...personalDetails, [e.target.name]: e.target.value});
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
            value={personalDetails.country}
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
