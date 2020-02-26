import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/authActions';
import './AuthForm';

const AuthForm = (props) => {

    const [ authInfo, setAuthInfo ] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setAuthInfo({
            ...authInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.authLogin(authInfo);
        setAuthInfo({
            email: '',
            password: ''
        })
    }

    return (
        <Container className="auth-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={authInfo.email}
                        placeholder="enter your email"
                        onChange={handleChange}
                        required
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={authInfo.password}
                        placeholder="enter your password"
                        onChange={handleChange}
                        required
                        />
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

// const mapStateToProps = ({subjects, resources}) => ({
//     subjects, resources
// })

const mapDispatchToProps = {
    authLogin
}

export default connect(null, mapDispatchToProps)(AuthForm);
