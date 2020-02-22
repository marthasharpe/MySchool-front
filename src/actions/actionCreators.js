import axios from 'axios';
import {
    SET_SUBJECTS, SET_RESOURCES, ADD_RESOURCE, ADD_SUBJECT, EDIT_RESOURCE
} from './actionTypes';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

export const getSubjects = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/subjects`)
            .then(response => {
                console.log(response.data.subjects);
                dispatch(setSubjects(response.data.subjects));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const setSubjects = (subjects) => {
    return {
        type: SET_SUBJECTS,
        payload: subjects
    }
}

export const getResources = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/resources`)
            .then(response => {
                console.log(response.data.resources);
                dispatch(setResources(response.data.resources));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const setResources = (resources) => {
    return {
        type: SET_RESOURCES,
        payload: resources
    }
}

export const postResource = (info) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/resources`, info)
            .then(response => {
                console.log(response.data.createdResource);
                dispatch(addResource(response.data.createdResource));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const addResource = (info) => {
    return {
        type: ADD_RESOURCE,
        payload: info
    }
}

export const postSubject = (info) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/subjects`, info)
            .then(response => {
                console.log(response.data);
                dispatch(addSubject(response.data.newSubject));
            })
            .catch(error => {
                throw(error);
            })
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