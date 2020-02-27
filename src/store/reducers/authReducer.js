import {
    LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOGOUT
} from '../actions/actionTypes';

const initialState = {
    loggedIn: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state
    }
}

export default authReducer;