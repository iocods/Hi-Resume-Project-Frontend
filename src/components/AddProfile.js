import {React, useEffect} from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import {DialogContent, Dialog, DialogTitle, DialogActions, Button, TextField} from '@mui/material';
import { useNavigate } from "react-router-dom";

const AddProfile = ({ type }) => {
    const PROFILE_URL = 'http://localhost:8080/resume/my-profile';
    const open = useStoreState(state => state.open);
    const setOpen = useStoreActions(actions => actions.setOpen);
    const token = useStoreState(state => state.userHeader);
    const newProfile = useStoreState(state => state.newProfile);
    const setNewProfile = useStoreActions(actions => actions.setNewProfile);
    const Navigate = useNavigate();
    const setTitle = useStoreActions(actions => actions.setTitle);
    useEffect(() => {

    }, []);
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const addProfile = async () => {
        console.log(JSON.stringify(newProfile));
        const profile = newProfile;
        setNewProfile({...newProfile, type: '', skills: [], languages: [], title: ''})
        try{
            const response = await fetch(PROFILE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token.Authorization
                },
                body: JSON.stringify(profile)
            })
            console.log(`Response Details:  ${response}`)
        } catch(error){
            console.log(error.message);
        } finally{
            setTitle(profile.title);
            Navigate(`${profile.title}/address`);
        }
    }
  return <main>
    <Button
        onClick={handleOpen}
    >
        Add a new profile.
    </Button>
    <Dialog open={open} onClose={handleClose}>
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
                    setNewProfile({...newProfile, [e.target.name]: e.target.value, type: type});
                }}
            ></TextField>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}> 
                Cancel
            </Button>
            <Button onClick={() => {
                const resumeTitle = newProfile.title;
                addProfile();
                Navigate(`${resumeTitle}/address`);
            }}> 
                Add
            </Button>
        </DialogActions>
    </Dialog>
  </main>;
};

export default AddProfile;
