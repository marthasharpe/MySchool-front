import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';
import SideTabs from '../sideTabs/SideTabs';
import LoadingPage from '../loadingPage/LoadingPage';
import './Home.css';

const Home = (props) => {

    if (props.user.loading) {
        return <LoadingPage />
    } else if (props.user.error) {
        return (
            <h1>{props.user.error}</h1>
        )
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
                <Row className="justify-content-center">
                    <p style={{textAlign: "center"}}>
                        A place to make your own curriculum.<br/>
                        Create subjects and save learning resources.<br/>
                        Track your progress and build an online portfolio.
                    </p>
                </Row>
                <Row className="justify-content-center">
                    <Signature />
                </Row>
            </div>  
        )
    }
    // return (
    //     <div className="home-container">
    //         { props.user.loading ? (
    //             <LoadingPage />
    //             ) : props.user.error ? (
    //                 <h1>{props.user.error}</h1>
    //             ) : props.user.loggedIn ? (
    //                 <Container fluid>
    //                     <SideTabs />
    //                 </Container>
    //             ) : (
    //                 <div>
    //                     <Welcome />
    //                     <Row className="justify-content-center">
    //                         <p style={{textAlign: "center"}}>
    //                             A place to make your own curriculum.<br/>
    //                             Create subjects and save learning resources.<br/>
    //                             Track your progress and build an online portfolio.
    //                         </p>
    //                     </Row>
    //                     <Row className="justify-content-center">
    //                         <Signature />
    //                     </Row>
    //                 </div>     
    //             )
    //         }
    //     </div>
    // )
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps)(Home);
