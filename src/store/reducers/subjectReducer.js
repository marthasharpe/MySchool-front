import {
    SET_SUBJECTS, ADD_SUBJECT, DELETE_SUBJECT
} from '../actions/actionTypes';

const subjectReducer = (state = [], action) => {
    switch (action.type) {
        case SET_SUBJECTS:
            return state.concat(action.payload)
        case ADD_SUBJECT:
            return state.concat(action.payload)
        case DELETE_SUBJECT:
            return state.filter(subject => {
                return subject._id !== action.payload
            })
        default:
            return state
    }
}

export default subjectReducer;