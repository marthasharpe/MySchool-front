import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const AppBar = () => {
    return (
        <Navbar bg="success" variant="dark">
            <Navbar.Brand href="#home">MySchool</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link href="#login">Log In</Nav.Link>
                <Nav.Link href="#signup">Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;
