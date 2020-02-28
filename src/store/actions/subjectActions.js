import axios from 'axios';

// get all subjects
export const GET_SUBJECTS_REQUEST = 'GET_SUBJECTS_REQUEST';
export const GET_SUBJECTS_SUCCESS = 'GET_SUBJECTS_SUCCESS';
export const GET_SUBJECTS_FAILURE = 'GET_SUBJECTS_FAILURE';
// post new subject
export const ADD_SUBJECT_REQUEST = 'ADD_SUBJECT_REQUEST';
export const ADD_SUBJECT_SUCCESS = 'ADD_SUBJECT_SUCCESS';
export const ADD_SUBJECT_FAILURE = 'ADD_SUBJECT_FAILURE';
// delete a subject
export const DELETE_SUBJECT_REQUEST = 'DELETE_SUBJECT_REQUEST';
export const DELETE_SUBJECT_SUCCESS = 'DELETE_SUBJECT_SUCCESS';
export const DELETE_SUBJECT_FAILURE = 'DELETE_SUBJECT_FAILURE';

const apiUrl = "https://floating-crag-05232.herokuapp.com"
const token = sessionStorage.getItem('token');
let config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

export const getSubjects = () => {
    return (dispatch) => {
        dispatch(getSubjectsRequest());
        return axios.get(`${apiUrl}/subjects`, config)
            .then(response => {
                dispatch(getSubjectsSuccess(response.data.subjects));
            })
            .catch(error => {
                dispatch(getSubjectsFailure(error));
            })
    }
}

export const getSubjectsRequest = () => {
    return {
        type: GET_SUBJECTS_REQUEST
    }
}

export const getSubjectsSuccess = (subjects) => {
    return {
        type: GET_SUBJECTS_SUCCESS,
        payload: subjects
    }
}

export const getSubjectsFailure = (error) => {
    return {
        type: GET_SUBJECTS_FAILURE,
        payload: error
    }
}

export const addSubject = (info) => {
    return (dispatch) => {
        dispatch(addSubjectRequest());
        return axios.post(`${apiUrl}/subjects`, info, config)
            .then(response => {
                dispatch(addSubjectSuccess(response.data.newSubject));
            })
            .catch(error => {
                dispatch(getSubjectsFailure(error));
            })
    }
}

export const addSubjectRequest = () => {
    return {
        type: ADD_SUBJECT_REQUEST
    }
}

export const addSubjectSuccess = (info) => {
    return {
        type: ADD_SUBJECT_SUCCESS,
        payload: info
    }
}

export const addSubjectFailure = (error) => {
    return {
        type: ADD_SUBJECT_FAILURE,
        payload: error
    }
}

export const deleteSubject = (id) => {
    return (dispatch) => {
        dispatch(deleteSubjectRequest());
        return axios.delete(`${apiUrl}/subjects/${id}`, config)
            .then(response => {
                dispatch(deleteSubjectSuccess(id));
            })
            .catch(error => {
                dispatch(deleteSubjectFailure(error));
            })
    }
}

export const deleteSubjectRequest = () => {
    return {
        type: DELETE_SUBJECT_REQUEST
    }
}

export const deleteSubjectSuccess = (id) => {
    return {
        type: DELETE_SUBJECT_SUCCESS,
        payload: id
    }
}

export const deleteSubjectFailure = (error) => {
    return {
        type: DELETE_SUBJECT_FAILURE,
        payload: error
    }
}