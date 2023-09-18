import React, { useState, useHistory, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Header = ({logout}) => (
    <header>
        <Link to={"/"}>
            <Typography variant="h5" style={{color: '#333'}}>
                Hi-Resume 
            </Typography>
        </Link>
        <div className="links-container">
            <NavLink className="links" to="/">Home</NavLink>
            <NavLink className="links" to="/resume">Resumes</NavLink>
            <NavLink className="links" to="/cv">CV</NavLink>
            <NavLink className="links" to="/login">Cover Letter</NavLink>
            {sessionStorage.getItem('jwt') ? 
            <Button
                onClick={logout}
            >
                Logout
            </Button>:
            <NavLink className="links" to="/login">Login</NavLink>}
        </div>
    </header>
)

export default Header;