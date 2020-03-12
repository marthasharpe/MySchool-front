import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';
import WelcomeSlider from '../welcomeSlider/WelcomeSlider';
import SideTabs from '../sideTabs/SideTabs';
import LoadingPage from '../loadingPage/LoadingPage';
import { userLogout } from '../../store/actions/userActions';
import './Home.css';

const Home = (props) => {

    if (props.user.loading) {
        return <LoadingPage />
    // } else if (props.user.error) {
    //     alert(props.user.error);
    //     props.userLogout();
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

const mapDispatchToProps = ({
    userLogout
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
