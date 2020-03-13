import React from 'react';
import './Dashboard.css';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const Dashboard = (props) => {

    return (
        <Container className="dashboard-container">
          <h1>Welcome, {props.user.user.firstName}!</h1>
          <p>If you're learning online, this is the place to save the resources you find. You can also create your own subjects to keep them orgnized. To view your resources, just go to your curriculum.</p>
        </Container>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps)(Dashboard);