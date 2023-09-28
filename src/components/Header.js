import React, { useState, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ButtonWithIcon from '../links/ButtonWithIcon';
import DataContext from '../context/DataContext';

const Header = ({logout}) => {
    const initialButtonStyle = {
        color: '#fff',
        fontSize: 18
    };
    const [buttonStyle, setButtonStyle] = useState(initialButtonStyle);
    const buttonStyleHover = {
        color: 'goldenrod',
        backgroundColor: '#382902',
        fontSize: 18
    }
    const {showCvLink, setShowCvLink, showCoverLetterLink, setShowCoverLetterLink, showResumeLink, setShowResumeLink, onResumeButtonClick, onCvButtonClick, onCoverLetterButtonClick} = useContext(DataContext);
    return (
    <header>
        <Link className="logo"  to={"/home"}>
            <Typography className="logo" variant="h5" style={{color: '#fff'}}>
                Hi-<span>Resume</span>
            </Typography>
        </Link>
        <div className="links-container">
            <div className="relative-link-container">
                <Link to="/home">Home</Link>
            </div>
            <div className="relative-link-container">
                <ButtonWithIcon 
                    text={"Resume"} 
                    onButtonClick={onResumeButtonClick} 
                    isIconDown={showResumeLink} 
                    className="links"
                />
                {
                    showResumeLink && 
                    <div className="absolute-link-container">
                        <Link to="/resume">My Resume</Link>       
                        <Link to="/resume/personal">Create Resume</Link>
                    </div>
                }
            </div>
            <div className="relative-link-container">
                <ButtonWithIcon 
                    text={"Cv"} 
                    onButtonClick={onCvButtonClick} 
                    isIconDown={showCvLink} 
                    className="links" 
                    to="/cv"
                />
                {
                    showCvLink && 
                    <div className="absolute-link-container">
                        <Link>My Cv</Link>    
                        <Link>Create Cv</Link>
                    </div>
                }
            </div>
            <div className="relative-link-container">
                <ButtonWithIcon 
                    text={"Cover Letter"} 
                    onButtonClick={onCoverLetterButtonClick} 
                    isIconDown={showCoverLetterLink} 
                    className="links" 
                    to="/login"
                />
                {
                    showCoverLetterLink && 
                    <div className="absolute-link-container">
                        <Link>My Cover Letter</Link>    
                        <Link>Create Cover Letter</Link>
                    </div>
                }
            </div>
        </div>
        <div>
            {
                sessionStorage.getItem('jwt') ? 
                <button onClick={logout}>
                    Logout
                </button> :
                <div className="sign-in-container">
                    <NavLink className="login-links sign-up-link"  to={"/signup"} >Sign Up</NavLink>
                    <NavLink className="login-links" to="/login">Sign In</NavLink>
                </div>
            }
        </div>
    </header>
)
}
export default Header;