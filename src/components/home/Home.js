import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';
import WelcomeSlider from '../welcomeSlider/WelcomeSlider';
import SideTabs from '../sideTabs/SideTabs';
import LoadingPage from '../loadingPage/LoadingPage';
import './Home.css';

const Home = (props) => {

    if (props.user.loading) {
        return <LoadingPage />
    } else if (props.user.loggedIn) {
        return (
            <Container fluid>
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
