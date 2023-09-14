import {React, useEffect, useState} from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import {DialogContent, Dialog, DialogTitle, DialogActions, Button, TextField} from '@mui/material';
import { useNavigate, Routes, Route } from "react-router-dom";
import Address from "./Address";
import WorkHistory from "./WorkHistory";

// const AddProfile = ({ type }) => {
//     const PROFILE_URL = 'http://localhost:8080/resume/my-profile';
//     const open = useStoreState(state => state.open);
//     const setOpen = useStoreActions(actions => actions.setOpen);
//     const token = useStoreState(state => state.userHeader);
//     const newProfile = useStoreState(state => state.newProfile);
//     const setNewProfile = useStoreActions(actions => actions.setNewProfile);
    // const Navigate = useNavigate();
//     const setTitle = useStoreActions(actions => actions.setTitle);
//     const title = useStoreState(state => state.title);
//     useEffect(() => {
//         console.log("Profile Updated Only at Load Time!");
//     }, []);
//     const addProfile = async () => {
//         console.log(JSON.stringify(newProfile));
//         const profile = newProfile;
//         try{
//             const response = await fetch(PROFILE_URL, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': token.Authorization
//                 },
//                 body: JSON.stringify(profile)
//             })
//             console.log(`Response Details:  ${response}`)
//         } catch(error){
//             console.log(error.message);
//         } finally{
//             setTimeout(() => {
//             console.log(`The Given Title : ${title}`);
//             Navigate(`${newProfile.title}/address`);
//         }, 5000);
//         }
//     }
//     const handleClose = () => {
//         setOpen(false);
//     }
//     const handleOpen = () => {
//         setOpen(true);
//     }
//   return <main>
//     <Button
//         onClick={handleOpen}
//     >
//         Add a new profile.
//     </Button>
//     <Dialog open={open} onClose={handleClose}>
//         <DialogContent>
//             <p>Please provide a title that resonates well with the job you're applying for</p>
//             <TextField
//                 required={true}
//                 style={{width: "100%", margin: 10}}
//                 label='Resume Title'
//                 inputProps={{style: {
//                     height: '8px'
//                 }}}
//                 name='title'
//                 value={newProfile.title}
//                 color="primary"
//                 onChange={(e) => {
//                     setNewProfile({...newProfile, [e.target.name]: e.target.value, type: type});
//                 }}
//             ></TextField>
//         </DialogContent>
//         <DialogActions>
//             <Button onClick={handleClose}> 
//                 Cancel
//             </Button>
//             <Button onClick={() => {
//                 handleClose();
//                 const resumeTitle = newProfile.title;
//                 setTitle(resumeTitle);
//                 addProfile();  
//             }}> 
//                 Add
//             </Button>
//         </DialogActions>
//     </Dialog>
//     <Routes>
//         <Route path={`${title}/address`} element={<Address 
//             title={title}
//         />}/>
//     </Routes>
//   </main>;
// };

// export default AddProfile;

/** Second Implementation */
const AddProfile = ({type, setIsCreated}) => {
        const PROFILE_URL = 'http://localhost:8080/resume/my-profile';
        const open = useStoreState(state => state.open);
        const setOpen = useStoreActions(actions => actions.setOpen);
        const token = useStoreState(state => state.userHeader);
        const newProfile = useStoreState(state => state.newProfile);
        const setNewProfile = useStoreActions(actions => actions.setNewProfile);
        const Navigate = useNavigate();
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
            } finally{
                Navigate(`${newProfile.title}/address`, {replace: true});
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
                        setNewProfile({...newProfile, [e.target.name]: e.target.value, type: type});
                    }}
                ></TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}> 
                    Cancel
                </Button>
                <Button onClick={() => {
                    addProfile();
                    handleClose();
                }}> 
                    Add
                </Button>
            </DialogActions>
        </Dialog>
        <Routes>
            <Route path={':title/address'} element={<Address title={newProfile.title} setIsCreated={setIsCreated} Navigate={Navigate}/> } />
            <Route path={':title/workhistory'} element={<WorkHistory title={newProfile.title} setIsCreated={setIsCreated} Navigate={Navigate}/> }
            />
        </Routes>
      </main>;
    };
    
    export default AddProfile;