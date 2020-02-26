import {
    SET_SUBJECTS, ADD_SUBJECT, DELETE_SUBJECT
} from '../actions/actionTypes';

const initialState = [
    {
        _id: "5e5429ecab9da14c75371f7a",
        name:"React"
    },
    {
        _id: "5e5429f8ab9da14c75371f7b",
        name:"Redux"
    }
]

const subjectReducer = (state = initialState, action) => {
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