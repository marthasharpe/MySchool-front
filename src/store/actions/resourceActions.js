import axios from 'axios';
export const SET_RESOURCES = 'SET_RESOURCES';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const DELETE_RESOURCE = 'DELETE_RESOURCE';

const apiUrl = "https://floating-crag-05232.herokuapp.com"
const token = sessionStorage.getItem('token');
let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

export const getResources = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/resources`, config)
            .then(response => {
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
        return axios.post(`${apiUrl}/resources`, info, config)
            .then(response => {
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

export const deleteResourceRequest = (id) => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/resources/${id}`, config)
            .then(response => {
                dispatch(deleteResource(id));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const deleteResource = (id) => {
    return {
        type: DELETE_RESOURCE,
        payload: id
    }
}