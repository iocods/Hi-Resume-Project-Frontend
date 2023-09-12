import React from "react";
import {TextField, DialogContent, Container, Button, autocompleteClasses} from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';

const SignUp = () => {
    const setUser = useStoreActions(actions => actions.setUser); 
    const user = useStoreState(states => states.user);
    const [confirmPassword, setConfirmPassword] = useState('');
    const containerStyle = {
        maxWidth: 600,
        margin: "auto",
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
        border: "#fff 1 solid"
    }
    const requestObject = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    const REG_URL = 'http://localhost:8080/resume/user/registration';
    
    return <form className="user-details" onSubmit={(e) => e.preventDefault()}>
                <div className="user-details-container">
                    <div className="user-details-paragraph">   
                        <p>Enter your details to create an account</p>
                    </div>
                    <p className="personal-details">Personal Details</p>
                    <div className="username-container">
                        <TextField
                            required={true}
                            style={{width: 200, margin: 10}}
                            label='Firstname'
                            name='firstname'
                            value={user.firstname}
                            color="primary"
                            onChange={(e) => {
                                setUser({...user, [e.target.name]: e.target.value});
                                
                            }}
                        >
                        </TextField>
                        <TextField
                            required={true}
                            style={{width: 200, margin: 10}}
                            label='MiddleName'
                            name='middlename'
                            value={user.middlename}
                            color="primary"
                            onChange={(e) => {
                                setUser({...user, [e.target.name]: e.target.value});
                                
                            }}
                        >
                        </TextField>
                        <TextField
                                required={true}
                                style={{width: 200, margin: 10}}
                                label='Lastname'
                                name='lastname'
                                value={user.lastname}
                                color="primary"
                                onChange={(e) => {
                                    setUser({...user, [e.target.name]: e.target.value});
                                    
                                }}
                            >
                        </TextField>
                    </div>
                    <p className="security-paragraph">Security & Authentication</p>
                    <div className="password-container">
                                <TextField
                                    required={true}
                                    style={{margin: 10, flex: 1}}
                                    label='Password'
                                    name='password'
                                    type='password'
                                    value={user.password}
                                    color="primary"
                                    onChange={(e) => {
                                        setUser({...user, [e.target.name]: e.target.value});
                                        
                                    }}
                                >
                                </TextField>
                                <TextField
                                    required={true}
                                    style={{margin: 10, flex: 1}}
                                    label={'Confirm Password'}
                                    name='confirmPassword'
                                    type='password'
                                    value={confirmPassword}
                                    color="primary"
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value);
                                    }}
                                >
                                </TextField>
                                {/* <p>{(confirmPassword == user.password && confirmPassword.length > 1) ? "" : "Password does not match"}</p> */}
                    </div>
                    <p className="contact-paragraph">Contact Information</p>
                    <div className="contact-info-container">
                        <TextField
                            required={true}
                            style={{flex: 2, margin: 10}}
                            label='Email'
                            name='email'
                            value={user.email}
                            color="primary"
                            onChange={(e) => {
                                setUser({...user, [e.target.name]: e.target.value});
                                
                            }}
                        >
                        </TextField>
                        <TextField
                            required={true}
                            style={{flex: 1, margin: 10}}
                            placeholder='Date Of Birth'
                            name='dob'
                            value={user.dob}
                            type='date'
                            color="primary"
                            onChange={(e) => {
                                setUser({...user, [e.target.name]: e.target.value});
                                
                            }}
                        >
                        </TextField>
                    </div>
                    <div className="button-container">
                        <Button
                            color='secondary'
                            style={{flex: 1, padding: 15, backgroundColor: "45deg #fa325a #19faa3"}}
                            type='submit'
                            onClick={() => {
                                console.log(user);
                                console.log(JSON.stringify(user));
                                fetch(REG_URL, requestObject);
                        }}
                        >
                            Sign up
                        </Button>
                        <p>OR</p>
                        <button className="google-sign-up" type="submit">Sign up with google</button>
                        <p>
                            Already have an account? <a href="login.html">Click here</a> to login
                        </p>
                    </div>
                </div>
            </form>
};

export default SignUp;
