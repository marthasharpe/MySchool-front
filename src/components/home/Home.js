import React from 'react';
import { Row } from 'react-bootstrap';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Welcome />
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
