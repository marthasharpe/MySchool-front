import axios from 'axios';
import {
    LOGIN_SUCCESS, LOGIN_FAILURE
} from './actionTypes';
// import { getResources } from './resourceActions';
// import { getSubjects } from './subjectActions';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

export const authLogin = (authInfo) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/users/login`, authInfo)
            .then(response => {
                dispatch(loginSuccess(response.data.token));
                // dispatch(getSubjects());
                // dispatch(getResources());
            })
            .catch(error => {
                dispatch(loginFailure());
            })
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
        payload: 'Invalid email or password.'
    }
}