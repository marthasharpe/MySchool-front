import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import icon from '../../openbook.png';
import './AppBar.css';

const AppBar = () => {
    return (
        <Navbar variant="dark" sticky="top">
            <Navbar.Brand>
                <img
                    src={icon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="MySchool logo"
                    />
                <NavLink to="/" className="link">MySchool</NavLink>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <NavLink to="/login" className="link">Log In</NavLink>
                    <NavLink to="/signup" className="link">New User</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;
