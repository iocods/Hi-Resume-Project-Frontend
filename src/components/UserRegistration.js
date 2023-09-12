import {TextField, DialogContent, Container, Button, autocompleteClasses} from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';

const UserRegistration = () => {
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
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    const REG_URL = 'http://localhost:8080/resume/user/registration';
    return(
        <Container
            style={containerStyle}
        >
            <DialogContent>
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
                    label='Lastname'
                    name='lastname'
                    value={user.lastname}
                    color="primary"
                    onChange={(e) => {
                        setUser({...user, [e.target.name]: e.target.value});
                        
                    }}
                >
                </TextField>
                <TextField
                    required={true}
                    style={{width: 200, margin: 10}}
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
                    style={{width: 200, margin: 10}}
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
                <TextField
                    required={true}
                    style={{width: 200, margin: 10}}
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
                    style={{width: 200, margin: 10}}
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
                <p>{(confirmPassword == user.password && confirmPassword.length > 1) ? "" : "Password does not match"}</p>
                <Button
                    color='secondary'
                    onClick={() => {
                        console.log(user);
                        console.log(JSON.stringify(user));
                        fetch(REG_URL, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                }}
                >Sign up</Button>
            </DialogContent>
        </Container>
    )
}

export default UserRegistration;