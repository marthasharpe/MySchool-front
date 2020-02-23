import {
    SET_RESOURCES, ADD_RESOURCE
} from '../actions/actionTypes';

const resourceReducer = (state = [], action) => {
    switch (action.type) {
        case SET_RESOURCES:
            return state.concat(action.payload)
        case ADD_RESOURCE:
            return state.concat(action.payload)
        default:
            return state
    }
}

export default resourceReducer;