import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Signature from '../Signature/Signature';
import Welcome from '../welcome/Welcome';
import SideTabs from '../sideTabs/SideTabs';
import LoadingPage from '../loadingPage/LoadingPage';
import './Home.css';
import { getResources } from '../../store/actions/resourceActions';
import { getSubjects } from '../../store/actions/subjectActions';

const Home = (props) => {
    const { auth, getResources, getSubjects } = props;

    React.useEffect(() => {
        if (auth.loggedIn) {
            getSubjects();
            getResources();
        }
    }, [auth, getResources, getSubjects])


    return (
        <div className="home-container">
            { auth.loading ? (
                <LoadingPage />
                ) : auth.loggedIn ? (
                    <Container>
                        <SideTabs />
                    </Container>
                ) : (
                    <div>
                        <Welcome />
                        <Row className="justify-content-center">
                            <p style={{textAlign: "center"}}>
                                A place to make your own curriculum.<br/>Create subjects and save learning resources.<br/>Track your progress and build an online portfolio.
                            </p>
                        </Row>
                        <Row className="justify-content-center">
                            <Signature />
                        </Row>
                    </div>     
                )
            }
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({
    auth
})

const mapDispatchToProps = ({
    getResources,
    getSubjects
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
