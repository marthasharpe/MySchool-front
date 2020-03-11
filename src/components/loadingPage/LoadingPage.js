import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import "./LoadingPage.css"

const LoadingPage = () => {
    return (
        <Container className="spinner-container">
            <Spinner animation="border" variant="light" />
        </Container>
    )
}

export default LoadingPage;
