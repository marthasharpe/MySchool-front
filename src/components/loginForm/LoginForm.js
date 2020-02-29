import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogin } from '../../store/actions/authActions';
import './LoginForm.css';

const LoginForm = (props) => {

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

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.authLogin(authInfo);
        // reset local state
        setAuthInfo({
            email: '',
            password: ''
        })
        // redirect to home
        history.push('/');
    }

    return (
        <Container className="auth-container">
            <Form className="auth-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
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
    authLogin
})

export default connect(null, mapDispatchToProps)(LoginForm);
