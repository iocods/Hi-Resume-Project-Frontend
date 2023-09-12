import {React, useEffect} from "react";
import {Routes, Route, useNavigate, Link} from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Address from "./components/Address";
import { useStoreState } from "easy-peasy";
import {AppBar, Typography, Toolbar, Container, Button} from "@mui/material";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home", {replace: true});
  }, [])
  const user = useStoreState(states => states.userLogin);
  return( 
        <div>
        <header>
            <Link to={"/home"}>
                <Typography variant="h6" style={{color: '#fff'}}>
                   Hi Resume 
                </Typography>
            </Link>
            <div className="links-container">
                {console.log(user.authorized)}
                <Link className="links" to="/login">Resumes</Link>
                <Link className="links" to="/login">Curriculum Vitae</Link>
                <Link className="links" to="/login">Cover Letters</Link>
                {user.authorized === true ? <Link to="/login">Logout</Link> : <Link className="links" to="/login">Login</Link>}
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
