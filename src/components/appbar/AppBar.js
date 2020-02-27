import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import icon from '../../openbook.png';
import { userLogout } from '../../store/actions/authActions';
import ResourceModal from '../resourceModal/ResourceModal';
import './AppBar.css';

const AppBar = (props) => {

    let history = useHistory();

    const handleLogout = () => {
        props.userLogout();
        sessionStorage.clear();
        history.push('/');
    }

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
                        <ResourceModal />
                        <Button variant="link" onClick={handleLogout} className="link">Log Out</Button>
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

const mapDispatchToProps = ({
    userLogout
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
