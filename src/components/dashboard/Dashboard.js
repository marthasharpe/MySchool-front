import React from 'react';
import { Container } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Container className='dashboard-container'>
            <h1>Dashboard</h1>
            <ul>
                <li>get resources by status</li>
                <li>todo list?</li>
                <li>calendar?</li>
            </ul>
        </Container>
    )
}

export default Dashboard
