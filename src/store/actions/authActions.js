import axios from 'axios';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

const apiUrl = "https://floating-crag-05232.herokuapp.com";

export const authLogin = (authInfo) => {
    return (dispatch) => {
        dispatch(loginRequest());
        return axios.post(`${apiUrl}/users/login`, authInfo)
            .then(response => {
                dispatch(loginSuccess(response.data.user));
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('userId', response.data.user.userId);
            })
            .catch(error => {
                dispatch(loginFailure());
            })
    }
}

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
        payload: 'Invalid email or password.'
    }
}

export const authSignup = (authInfo) => {
    return (dispatch) => {
        dispatch(signupRequest());
        return axios.post(`${apiUrl}/users/signup`, authInfo)
            .then(response => {
                dispatch(signupSuccess(response.data.user));
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('userId', response.data.user._id);
            })
            .catch(error => {
                dispatch(signupFailure());
            })
    }
}

export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}

export const signupSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user
    }
}

export const signupFailure = () => {
    return {
        type: SIGNUP_FAILURE,
        payload: 'Invalid email or password.'
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}