import {
    LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST
} from '../actions/authActions';

const initialState = {
    loading: false,
    loggedIn: false,
    user: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                error: null,
                user: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: action.payload
            }
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                error: null,
                user: action.payload
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;