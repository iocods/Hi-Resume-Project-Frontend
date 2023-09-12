import React, { useState, useHistory, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { AppBar } from '@mui/material';
import {Toolbar} from '@mui/material';
import {Typography} from '@mui/material';

const Header = () => (
    <Container className="container">
        <AppBar position="static" className="container" style={{backgroundColor: 'black'}}>
            <Toolbar className="container">
                <Typography  style={{padding: "1rem"}}
                    variant="h6"
                >
                    Resume Creator
                </Typography>
            </Toolbar>
        </AppBar>
    </Container>
)

export default Header;