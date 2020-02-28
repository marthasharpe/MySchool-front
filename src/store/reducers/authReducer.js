import {
    LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST
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
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                userId: action.payload
            }
        case LOGIN_FAILURE:
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