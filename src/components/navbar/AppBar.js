import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import LoggedInNavs from './LoggedInNavs';

const AppBar = () => {
    return (
        <Navbar bg="success" variant="dark">
            <Navbar.Brand><NavLink to="/" className="link">MySchool</NavLink></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <LoggedInNavs />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;
