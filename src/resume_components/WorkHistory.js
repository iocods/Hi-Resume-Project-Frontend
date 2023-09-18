import {React, useEffect, useContext} from "react";
import { TextField, Button } from "@mui/material";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";

const WorkHistory = ({setCurrentCategory, setCurrentIndex}) => {
    const {education, workHistory, setWorkHistory, newWorkHistory, setNewWorkHistory, addWorkHistory} = useContext(DataContext)
  const Navigate = useNavigate();
  useEffect(() => {
        setCurrentCategory('Work History');
        setCurrentIndex(3);
        console.log(`printing the list of education from the workhistory panel ${JSON.stringify(education)}`);
    },[]);
  return <div>
    <form onSubmit={(e) => e.preventDefault()}>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Company Name'
            inputProps={{style: {
                height: '8px'
            }}}
            name='companyName'
            value={newWorkHistory.companyName}
            color="primary"
            onChange={(e) => {
                setNewWorkHistory({...newWorkHistory, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='Role'
            inputProps={{style: {
                height: '8px'
            }}}
            name='role'
            value={newWorkHistory.role}
            color="primary"
            onChange={(e) => {
                setNewWorkHistory({...newWorkHistory, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Describe Your Role and Achievement in few words'
            inputProps={{style: {
                height: '8px'
            }}}
            name='roleDescription'
            value={newWorkHistory.roleDescription}
            color="primary"
            onChange={(e) => {
                setNewWorkHistory({...newWorkHistory, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='Start'
            inputProps={{style: {
                height: '8px'
            }}}
            type="date"
            name='startDate'
            value={newWorkHistory.startDate}
            color="primary"
            onChange={(e) => {
                setNewWorkHistory({...newWorkHistory, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='End'
            type="date"
            inputProps={{style: {
                height: '8px'
            }}}
            name='endDate'
            value={newWorkHistory.endDate}
            color="primary"
            onChange={(e) => {
                setNewWorkHistory({...newWorkHistory, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <div>
            <Button onClick={() => Navigate('/resume/education')}>
                Prev
            </Button>
            <Button
                onClick={() => Navigate('/resume/skills')}
            > 
                Next
            </Button>
            <Button
                onClick={addWorkHistory}
            >
                Add WorkHistory.
            </Button>
        </div>
        </form>
    </div>
};

export default WorkHistory;
