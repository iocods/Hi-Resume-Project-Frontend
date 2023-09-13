import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import {Dialog, DialogTitle, DialogActions, DialogContent, Button} from "@mui/material";


const Logout = () => {
    const open = useStoreState(state => state.logout);
    const setOpen = useStoreActions(actions => actions.setLogout);
    const token = useStoreState(state => state.userHeader);
    const user = useStoreState(state => state.userLogin);
    const navigate = useNavigate()
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    useEffect(() => {

    }, [])
  return (
    <>
        <Button onClick={handleOpen}>Logout</Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>
                <p>Are you sure you want to Logout</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}> 
                    No
                </Button>
                <Button onClick={navigate("/login", {replace: true})}> 
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    </>
    )
};

export default Logout;
