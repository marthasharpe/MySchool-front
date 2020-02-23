import {
    SET_SUBJECTS, ADD_SUBJECT
} from '../actions/actionTypes';

const subjectReducer = (state = [], action) => {
    switch (action.type) {
        case SET_SUBJECTS:
            return state.concat(action.payload)
        case ADD_SUBJECT:
            return state.concat(action.payload)
        default:
            return state
    }
}

export default subjectReducer;