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
        password: '',
        password2: ''
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
        if (authInfo.password !== authInfo.password2) {
            alert('Passwords don\'t match.');
            setAuthInfo({
                ...authInfo,
                password: '',
                password2: ''
            });
        } else {
            props.authSignup({
                firstName: authInfo.firstName,
                lastName: authInfo.lastName,
                email: authInfo.email,
                password: authInfo.password,
            });
            // reset local state
            setAuthInfo({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password2: ''
            })
            // redirect to home
            history.push('/');
        }
    }

    return (
        <Container className="auth-container">
            <Form className="auth-form" onSubmit={handleSubmit}>
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
                        placeholder="create a password"
                        onChange={handleChange}
                        required
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password2"
                        value={authInfo.password2}
                        placeholder="re-enter your password"
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
