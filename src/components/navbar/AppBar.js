import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


const AppBar = () => {
    return (
        <Navbar bg="success" variant="dark">
            <Navbar.Brand><NavLink to="/" className="link">MySchool</NavLink></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav>
                <NavLink to="/login" className="link">Log In</NavLink>
                <NavLink to="/signup" className="link">New User</NavLink>
                <NavLink to="/subjects" className="link">Subjects</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;
