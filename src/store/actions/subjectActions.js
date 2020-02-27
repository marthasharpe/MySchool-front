import axios from 'axios';
export const SET_SUBJECTS = 'SET_SUBJECTS';
export const ADD_SUBJECT = 'ADD_SUBJECT';
export const DELETE_SUBJECT = 'DELETE_SUBJECT';

const apiUrl = "https://floating-crag-05232.herokuapp.com"

export const getSubjects = (token) => {
    let config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    return (dispatch) => {
        return axios.get(`${apiUrl}/subjects`, config)
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

export const deleteSubjectRequest = (id) => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/subjects/${id}`)
            .then(response => {
                console.log(response);
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