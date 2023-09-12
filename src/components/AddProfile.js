import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import {DialogContent, Dialog, DialogTitle, DialogActions, Button, TextField} from '@mui/material';
import { Navigate } from "react-router-dom";

const AddProfile = () => {
    const PROFILE_URL = 'http://localhost:8080/resume/my-profile';
    const open = useStoreState(state => state.open);
    const setOpen = useStoreActions(actions => actions.setOpen);
    const token = useStoreState(state => state.userHeader);
    const newProfile = useStoreState(state => state.newProfile);
    const setNewProfile = useStoreActions(actions => actions.setNewProfile);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const addProfile = async () => {
        try{
            const response = await fetch(PROFILE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token.Authorization
                },
                body: JSON.stringify(newProfile)
            })
            console.log(`Response Details:  ${response}`)
            if(!response.ok) Navigate('/login', {replace: true});
        } catch(error){
            console.log(error.message);
        }
    }
  return <main>
    {console.log(token.Authorization)}
    <Button
        onClick={handleOpen}
    >
        Add a new profile.
    </Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Resume Title</DialogTitle>
        <DialogContent>
            <p>Please provide a title that resonates well with the job you're applying for</p>
            <TextField
                required={true}
                style={{width: "100%", margin: 10}}
                label='Resume Title'
                inputProps={{style: {
                    height: '8px'
                }}}
                name='title'
                value={newProfile.title}
                color="primary"
                onChange={(e) => {
                    setNewProfile({...newProfile, [e.target.name]: e.target.value});
                }}
            ></TextField>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}> 
                Cancel
            </Button>
            <Button onClick={addProfile}> 
                Add
            </Button>
        </DialogActions>
    </Dialog>
  </main>;
};

export default AddProfile;
