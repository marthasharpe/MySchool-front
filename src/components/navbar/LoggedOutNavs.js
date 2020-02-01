import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LoggedOutNavs = () => {
    return (
        <Nav>
            <NavLink to="/login" className="link">Log In</NavLink>
            <NavLink to="/signup" className="link">New User</NavLink>
        </Nav>
    )
}

export default LoggedOutNavs;
