import {React, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {TextField, DialogContent, Container, Button, autocompleteClasses} from '@mui/material';
import { useStoreActions, useStoreState } from "easy-peasy";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const user = useStoreState(states => states.userLogin);
    const setUser = useStoreActions(actions => actions.setUserLogin);
    const AUTH_URL = `http://localhost:8080/resume/user/auth`;
    const headers = useStoreState(states => states.userHeader);
    const setHeader = useStoreActions(actions => actions.setUserHeader);
    const formStyle = useStoreState(states => states.style);
    useEffect(() => {

    }, [])
    const authUser = async (userDetails) => {
        let response = null;
        const requestObject = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            response = await fetch(AUTH_URL, requestObject);
            if(!response.ok) throw Error("Invalid Username or Password");
            console.log(response);
            const jwtToken = response.headers.get('Authorization');
            if (!jwtToken) throw Error("Token not found in header");

            sessionStorage.setItem("jwt", jwtToken);
            console.log(`Jwt is {jwtToken}`);
            setUser({...user, password: '', authorized: true});
            setHeader({...headers, Authorization: jwtToken});
            navigate('/home', {replace: true});
        }
        catch(error){
            console.log(error.message);
            navigate('/login', {replace: true});
        }
    }
    return (
        <form className="user-details" 
            onSubmit={(e) => e.preventDefault()}
            style={formStyle}
        >
            {console.log(sessionStorage.getItem('jwt'))}
            <p className="login-paragraph">Login to access your account.</p>
            <div className="login-credentials-container">
                <TextField
                    required={true}
                    style={{width: "100%", margin: 10}}
                    label='Username'
                    inputProps={{style: {
                        height: '8px'
                    }}}
                    name='username'
                    value={user.username}
                    color="primary"
                    onChange={(e) => {
                        setUser({...user, [e.target.name]: e.target.value});
                    }}
                ></TextField>
                <TextField
                    required={true}
                    style={{width: "100%", margin: 10}}
                    type="password"
                    label='Password'
                    inputProps={{style: {
                        height: '8px'
                    }}}
                    name='password'
                    value={user.password}
                    color="primary"
                    onChange={(e) => {
                        setUser({...user, [e.target.name]: e.target.value});
                    }}
                ></TextField>
            </div>
            <div className="js-forgotten-password-container">
                <p className="js-forgotten-password forgotten-password"></p>
                <p className="js-reset-password reset-password"></p>
            </div>
            <div className="button-container">
                    <Button
                        color='secondary'
                        style={{flex: 1, padding: 15, backgroundColor: "45deg #fa325a #19faa3"}}
                        type='submit'
                        onClick={async () => {
                            console.log(`Before Authentication`)
                            console.log(JSON.stringify(user));
                            await authUser(user);
                            console.log(`After Authentication`)
                            user.authorized &&
                            console.log(JSON.stringify(user));
                        }
                    }>
                        Login
                    </Button>
                <p>OR</p>
                <button className="google-login" type="submit">Login with google</button>
                <p>
                    Don't yet have an account? <a href="simplesignuppage.html">Click here</a> to create one.
                </p>
                <Link to="/home">Go Home</Link>
            </div>
        </form>);
}
export default Login;

