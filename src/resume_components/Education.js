import {React, useEffect, useState, useContext} from "react";
import { TextField, Button } from "@mui/material";
import DataContext from "../context/DataContext";

const Education = ({setCurrentCategory, setCurrentIndex}) => {
    const {education, setEducation, newEducationDetails, setNewEducationDetails, Navigate, addDetails} = useContext(DataContext);
    useEffect(() => {
        setCurrentCategory("Education Details");
        setCurrentIndex(2);
        console.log(education);
    }, [education]);
    const onInputClick = (e) => {
        if(e.target.value == ' ')
            e.target.value = '';
    }
  return <form onSubmit={(e) => e.preventDefault()}>
  <div>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='College/Institution Name'
            inputProps={{style: {
                height: '8px'
            }}}
            name='institutionName'
            value={newEducationDetails.institutionName}
            color="primary"
            onClick={onInputClick}
            onChange={(e) => {
                setNewEducationDetails({...newEducationDetails, [e.target.name]: e.target.value});
            }}
        />
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='Field Of Study'
            inputProps={{style: {
                height: '8px'
            }}}
            name='courseOfStudy'
            value={newEducationDetails.courseOfStudy}
            color="primary"
            onChange={(e) => {
                setNewEducationDetails({...newEducationDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            label='Degree'
            type="text"
            inputProps={{style: {
                height: '8px'
            }}}
            name='degreeType'
            value={newEducationDetails.degreeType}
            color="primary"
            onChange={(e) => {
                setNewEducationDetails({...newEducationDetails, [e.target.name]: e.target.value});
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
            value={newEducationDetails.startDate}
            color="primary"
            onChange={(e) => {
                setNewEducationDetails({...newEducationDetails, [e.target.name]: e.target.value});
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
            value={newEducationDetails.endDate}
            color="primary"
            onChange={(e) => {
                setNewEducationDetails({...newEducationDetails, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <div>
            <Button
                onClick={() => Navigate('/resume/address', {replace: true})}>
                Prev
            </Button>
            <Button
                onClick={() => Navigate('/resume/workhistory', {replace: true})}
            > 
                Next
            </Button>
            <Button
                onClick={() => addDetails()}
            >
                Add Education Details.
            </Button>
        </div>
    </div>
  </form>;
};

export default Education;
