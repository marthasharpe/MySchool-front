import {
    SET_SUBJECTS, SET_RESOURCES, ADD_RESOURCE, ADD_SUBJECT, EDIT_RESOURCE
} from '../actions/actionTypes';

const initialState = {
    subjects: [],
    resources: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload
            }
        case SET_RESOURCES:
            return {
                ...state,
                resources: action.payload
            }
        case ADD_RESOURCE:
            return {
                ...state,
                resources: [...state.resources, action.payload],
            }
        case ADD_SUBJECT:
            return {
                ...state,
                subjects: [...state.subjects, action.payload],
            }
        case EDIT_RESOURCE:
            let resource = state.resources.find(resource => resource.id === action.id)
            return {
                ...state,
                resources: [...state.resources, {...resource, ...action.payload}]
            }
        default:
            return state
    }
}

export default rootReducer;