import {React, useEffect, useContext} from "react";
import { TextField, Button } from "@mui/material";
import DataContext from "../context/DataContext";

const Reference = ({setCurrentCategory, setCurrentIndex}) => {
  const{reference, setReference, newReference, setNewReference, Navigate, onCreateFinish, resume, addReferee, setResume} = useContext(DataContext);
  useEffect(() => {
    setCurrentIndex(5);
    setCurrentCategory('Reference');
    console.log(JSON.stringify(resume));
  }, [resume])
  return <form onSubmit={(e) => e.preventDefault()}>
  <div>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Referee Name'
            inputProps={{style: {
              height: '8px'
            }}}
            name='fullname'
            value={reference.fullname}
            color="primary"
            onChange={(e) => {
                setNewReference({...newReference, [e.target.name]: e.target.value});
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
            value={reference.role}
            color="primary"
            onChange={(e) => {
                setNewReference({...newReference, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <TextField
            required={true}
            style={{width: "90%", margin: 10}}
            type="text"
            label='Company'
            inputProps={{style: {
              height: '8px'
            }}}
            name='company'
            value={reference.company}
            color="primary"
            onChange={(e) => {
                setNewReference({...newReference, [e.target.name]: e.target.value});
            }}
        ></TextField>
        <div>
          <h2>Referee Contact Info</h2>
          <TextField
              required={true}
              style={{width: "90%", margin: 10}}
              label='Email'
              inputProps={{style: {
                height: '8px'
              }}}
              name='email'
              value={reference.email}
              color="primary"
              onChange={(e) => {
                  setNewReference({...newReference, [e.target.name]: e.target.value});
              }}
          ></TextField>
          <TextField
              required={true}
              style={{width: "90%", margin: 10}}
              type="tel"
              label='Tel'
              inputProps={{style: {
                height: '8px'
              }}}
              name='tel'
              value={reference.tel}
              color="primary"
              onChange={(e) => {
                  setNewReference({...newReference, [e.target.name]: e.target.value});
              }}
          ></TextField>
          {reference && reference.map((r, index) => <p key={index}>{r.fullname}</p>)}
        </div>
        <div>
            <Button
              onClick={() => Navigate('/resume/skills', {replace: true})}>
              Prev
            </Button>
            <Button
              onClick={onCreateFinish}
            > 
              Finish
            </Button>
            <Button
                onClick={addReferee}
            >
                Add Referee.
            </Button>
        </div>
    </div>
  </form>;
};

export default Reference;
