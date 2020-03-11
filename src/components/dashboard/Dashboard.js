import React from 'react';
import './Dashboard.css';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const Dashboard = (props) => {

    return (
        <Container className="dashboard-container">
          <h1>Welcome, {props.user.user.firstName}!</h1>
        </Container>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps)(Dashboard);