import axios from 'axios';
export const SET_SUBJECTS = 'SET_SUBJECTS';
export const ADD_SUBJECT = 'ADD_SUBJECT';
export const DELETE_SUBJECT = 'DELETE_SUBJECT';

const apiUrl = "https://floating-crag-05232.herokuapp.com"
const token = sessionStorage.getItem('token');
let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

export const getSubjects = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/subjects`, config)
            .then(response => {
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

export const postSubject = (info) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/subjects`, info, config)
            .then(response => {
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

export const deleteSubjectRequest = (id) => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/subjects/${id}`, config)
            .then(response => {
                dispatch(deleteSubject(id));
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const deleteSubject = (id) => {
    return {
        type: DELETE_SUBJECT,
        payload: id
    }
}