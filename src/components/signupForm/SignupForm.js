import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSignup } from '../../store/actions/authActions';
import './SignupForm.css';

const SignupForm = (props) => {

    const [ authInfo, setAuthInfo ] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setAuthInfo({
            ...authInfo,
            [e.target.name]: e.target.value
        })
    }

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.authSignup(authInfo);
        // reset local state
        setAuthInfo({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
        // redirect to home
        history.push('/');
    }

    return (
        <Container className="auth-container">
            <Form className="auth-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={authInfo.firstName}
                        placeholder="first name"
                        onChange={handleChange}
                        required
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={authInfo.lastName}
                        placeholder="last name"
                        onChange={handleChange}
                        required
                        />
                </Form.Group>
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

const mapDispatchToProps = ({
    authSignup
})

export default connect(null, mapDispatchToProps)(SignupForm);
