import axios from 'axios';
import {
    SET_RESOURCES, ADD_RESOURCE
} from './actionTypes';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

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