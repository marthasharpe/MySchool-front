import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import LoggedInNavs from './LoggedInNavs';
import icon from '../../openbook.png';

const AppBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
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
            <LoggedInNavs />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;
