import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignup, userLogout } from '../../store/actions/userActions';
import './SignupForm.css';
import LoadingPage from '../loadingPage/LoadingPage';
import AlertModal from '../alertModal/AlertModal';

const SignupForm = (props) => {

    //modal state
    const [show, setShow] = React.useState(true);
  
    const [ userInfo, setUserInfo ] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInfo.password !== userInfo.password2) {
            alert('Passwords don\'t match.');
            setUserInfo({
                ...userInfo,
                password: '',
                password2: ''
            });
        } else {
            props.userSignup({
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                email: userInfo.email,
                password: userInfo.password,
            });
            // reset local state
            setUserInfo({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password2: ''
            })
        }
    }

    // close modal
    const handleClose = () => {
        setShow(false);
        props.userLogout();
    }

    if (props.user.loading) {
        return <LoadingPage />
    } else if (props.user.error) {
        return <AlertModal message={props.user.error} show={show} handleClose={handleClose}/>
    } else if (props.user.loggedIn) {
        // redirect to home
        history.push('/');
    }

    return (
        <Container className="user-container">
            <Form className="user-form" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={userInfo.firstName}
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
                        value={userInfo.lastName}
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
                        value={userInfo.email}
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
                        value={userInfo.password}
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
                        value={userInfo.password2}
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

const mapStateToProps = ({user}) => ({
    user
})

const mapDispatchToProps = ({
    userSignup,
    userLogout
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
