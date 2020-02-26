import axios from 'axios';
import {
    LOGIN_USER
} from './actionTypes';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

export const authLogin = (authInfo) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/users/login`, authInfo)
            .then(response => {
                console.log(response);
                dispatch(loginUser(response.data));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}