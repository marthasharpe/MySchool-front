import {
    SET_RESOURCES, ADD_RESOURCE, DELETE_RESOURCE
} from '../actions/resourceActions';

const resourceReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RESOURCES:
            return state.concat(action.payload)
        case ADD_RESOURCE:
            return state.concat(action.payload)
        case DELETE_RESOURCE:
            return state.filter(subject => {
                return subject._id !== action.payload
            })
        default:
            return state
    }
}

export default resourceReducer;