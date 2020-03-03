import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';
import SideTabs from '../sideTabs/SideTabs';
import './Home.css';

const Home = (props) => {
    return (
        <div className="home-container">
        { props.auth.loggedIn ? (
            <Container>
                <SideTabs />
            </Container>
        ) : (
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
        )}
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({
    auth
})

export default connect(mapStateToProps)(Home);
