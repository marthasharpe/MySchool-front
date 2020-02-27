import {
    LOGIN_SUCCESS, LOGIN_FAILURE, USER_LOGOUT, LOGIN_REQUEST
} from '../actions/authActions';

const initialState = {
    loading: false,
    loggedIn: false,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
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