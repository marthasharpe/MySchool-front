import axios from 'axios';
import {
    SET_DATA, ADD_RESOURCE, ADD_SUBJECT, EDIT_RESOURCE
} from './actionTypes';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

export const getData = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/subjects`)
            .then(response => {
                console.log(response.data.subjects);
                dispatch(setData(response.data.subjects));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const setData = (subjects) => {
    return {
        type: SET_DATA,
        payload: subjects
    }
}

export const addResource = (info) => {
    return {
        type: ADD_RESOURCE,
        payload: info
    }
}

export const addSubject = (info) => {
    return {
        type: ADD_SUBJECT,
        payload: info
    }
}

export const editResource = (id, info) => {
    return {
        type: EDIT_RESOURCE,
        id: id,
        payload: info
    }
}