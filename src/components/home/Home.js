import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';
import WelcomeSlider from '../welcomeSlider/WelcomeSlider';
import SideTabs from '../sideTabs/SideTabs';
import './Home.css';

const Home = (props) => {

    if (props.user.loggedIn) {
        return (
            <Container>
                <SideTabs />
            </Container>
        )
    } else {
        return (
            <div>
                <Welcome />
                <WelcomeSlider />
                <Row className="justify-content-center">
                    <Signature />
                </Row>
            </div>  
        )
    }
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps)(Home);
