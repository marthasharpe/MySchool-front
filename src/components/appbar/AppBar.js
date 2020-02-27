import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import icon from '../../openbook.png';
import './AppBar.css';

const AppBar = (props) => {
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
                {props.auth.loggedIn ? (
                    <Nav>
                        <NavLink to="/logout" className="link">Log Out</NavLink>
                    </Nav>                    
                ) : (
                    <Nav>
                        <NavLink to="/login" className="link">Log In</NavLink>
                        <NavLink to="/signup" className="link">New User</NavLink>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = ({ auth }) => ({
    auth
})

export default connect(mapStateToProps)(AppBar);
