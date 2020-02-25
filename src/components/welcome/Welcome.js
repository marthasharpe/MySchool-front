import React from 'react';
import { Row, Jumbotron } from 'react-bootstrap';
import icon from '../../openbook.png';
import './Welcome.css';

const Welcome = () => {
    return (
        <Jumbotron id="jumbotron">
            <Row className="justify-content-center">
                <img
                    src={icon}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="MySchool logo"
                    />
            </Row>
            <Row className="justify-content-center">
                <h1 style={{textAlign: "center"}}>Welcome to MySchool!</h1>
            </Row>
            <Row className="justify-content-center">
                <h3 style={{textAlign: "center"}}>
                    a.k.a. <em>your</em> school.
                </h3>
            </Row>
        </Jumbotron>
    )
}

export default Welcome;
