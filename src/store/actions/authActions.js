import axios from 'axios';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

export const authLogin = (authInfo) => {
    return (dispatch) => {
        dispatch(loginRequest());
        return axios.post(`${apiUrl}/users/login`, authInfo)
            .then(response => {
                dispatch(loginSuccess(response.data.user.userId));
                sessionStorage.setItem('token', response.data.token);
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

export const loginSuccess = (id) => {
    return {
        type: LOGIN_SUCCESS,
        payload: id
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
        payload: 'Invalid email or password.'
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}