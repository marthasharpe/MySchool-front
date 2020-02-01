export const ADD_RESOURCE = 'ADD_RESOURCE';
export const ADD_SUBJECT = 'ADD_SUBJECT';

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