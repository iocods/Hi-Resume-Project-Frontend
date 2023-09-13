import {React, useEffect} from "react";
import {Routes, Route, useNavigate, Link} from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Address from "./components/Address";
import { useStoreActions, useStoreState } from "easy-peasy";
import {AppBar, Typography, Toolbar, Container, Button} from "@mui/material";
import {Dialog, DialogTitle, DialogActions, DialogContent} from "@mui/material";

const App = () => {
  const user = useStoreState(states => states.userLogin);
  const setUser = useStoreActions(actions => actions.setUserLogin);
  const open = useStoreState(state => state.logout);
  const setOpen = useStoreActions(actions => actions.setLogout);
  const navigate = useNavigate();
  const logout = () => {
    setUser({...user, username: '', password: '', authorized: false});
    sessionStorage.removeItem('jwt');
    navigate("/login", {replace: true});
  }
    return( 
        <div>
        <header>
            <Link to={"/home"}>
                <Typography variant="h6" style={{color: '#fff'}}>
                   Hi Resume 
                </Typography>
            </Link>
            <div className="links-container">
                <Link className="links" to="/login">Resumes</Link>
                <Link className="links" to="/login">Curriculum Vitae</Link>
                <Link className="links" to="/login">Cover Letters</Link>
                {sessionStorage.getItem('jwt') ? 
                <Button
                  onClick={logout}
                >
                  Logout
                </Button>:
                <Link className="links" to="/login">Login</Link>}
            </div>
        </header>
          <Routes>
            <Route exact path='/register' element={<UserRegistration/>} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/address' element={<Address />} /> 
          </Routes>
        </div>
    );
};

export default App;
