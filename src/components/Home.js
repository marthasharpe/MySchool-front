import React from 'react';
import icon from '../openbook.png';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import Signature from './Signature/Signature';

const Home = () => {
    return (
        <React.Fragment>
            <Jumbotron>
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
                        a.k.a <em>your</em> school.
                    </h3>
                </Row>
                <Row style={{marginTop: 20}} className="justify-content-center">
                    <Col xs={{span: 5}} sm={{span: 3}} style={{textAlign: "center"}}>
                        <Button variant="success" style={{width: 100}}>New User</Button>
                    </Col>
                    <Col xs={{span: 5}} sm={{span: 3}} style={{textAlign: "center"}}>
                        <Button variant="success" style={{width: 100}}>Log In</Button>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <p style={{textAlign: "center"}}>
                        A place to make your own curriculum based on your interests.<br/>Create subjects and save learning resources.<br/>Track your progress and build an online portfolio.
                    </p>
                </Row>
            </Jumbotron>
            <Row className="justify-content-center">
                <Signature />
            </Row>
        </React.Fragment>
    )
}

export default Home;
