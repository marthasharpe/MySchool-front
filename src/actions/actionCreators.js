import { db } from '../firebase';

export const SET_SUBJECTS = 'SET_SUBJECTS';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const ADD_SUBJECT = 'ADD_SUBJECT';

export const setSubjects = () => {
    return (dispatch) => {
        db.collection('subjects').get()
            .then(res => res.docs.forEach(doc => {
                dispatch({
                    type: SET_SUBJECTS,
                    payload: doc.data()
                })
            }
        ))
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