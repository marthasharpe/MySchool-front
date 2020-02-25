import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Welcome />
            <Row style={{marginTop: 20, textAlign: "center"}} className="justify-content-center">
                <Col xs={{span: 5}} sm={{span: 3}}>
                    <Button variant="success" style={{width: 100}}>New User</Button>
                </Col>
                <Col xs={{span: 5}} sm={{span: 3}}>
                    <Button variant="success" style={{width: 100}}>Log In</Button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <p style={{textAlign: "center"}}>
                    A place to make your own curriculum based on your interests.<br/>Create subjects and save learning resources.<br/>Track your progress and build an online portfolio.
                </p>
            </Row>
            <Row className="justify-content-center">
                <Signature />
            </Row>
        </div>
    )
}

export default Home;
