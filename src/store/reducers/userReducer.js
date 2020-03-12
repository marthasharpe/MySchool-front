import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE,
    DELETE_REQUEST,
    USER_LOGOUT
} from '../actions/userActions';

const initialState = {
    loading: false,
    loggedIn: false,
    user: null,
    error: null
}

const userReducer = (state = initialState, action) => {
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
        case DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: null,
                user: null
            }
        case DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: null,
                error: null
            }
        default:
            return state;
    }
}

export default userReducer;