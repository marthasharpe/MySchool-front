import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin, userLogout } from '../../store/actions/userActions';
import './LoginForm.css';
import LoadingPage from '../loadingPage/LoadingPage';
import AlertModal from '../alertModal/AlertModal';

const LoginForm = (props) => {
    
    //modal state
    const [show, setShow] = React.useState(true);
  
    //form state
    const [ userInfo, setUserInfo ] = React.useState({
        email: '',
        password: ''
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
        props.userLogin(userInfo);
        // reset local state
        setUserInfo({
            email: '',
            password: ''
        })
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

const mapStateToProps = ({user}) => ({
    user
})

const mapDispatchToProps = ({
    userLogin,
    userLogout
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
