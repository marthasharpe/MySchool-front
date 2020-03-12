import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import icon from '../../openbook.png';
import { userLogout, userDelete } from '../../store/actions/userActions';
import './AppBar.css';

const AppBar = (props) => {

    let history = useHistory();

    const handleLogout = () => {
        props.userLogout();
        sessionStorage.clear();
        history.push('/');
    }

    const handleDeleteAccount = () => {
        props.userDelete();
        sessionStorage.clear();
        history.push('/');
    }

    return (
        <Navbar variant="dark" sticky="top" expand="sm">
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
            <Navbar.Toggle aria-controls="appbar-nav" />
            <Navbar.Collapse id="appbar-nav" className="justify-content-end">
                {props.user.loggedIn ? (
                    <NavDropdown title="Account" id="dropdown">
                        <NavDropdown.Item onClick={handleLogout}>
                            Log Out
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleDeleteAccount}>
                            Delete Account
                        </NavDropdown.Item>
                    </NavDropdown>                    
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

const mapStateToProps = ({ user }) => ({
    user
})

const mapDispatchToProps = ({
    userLogout,
    userDelete
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
