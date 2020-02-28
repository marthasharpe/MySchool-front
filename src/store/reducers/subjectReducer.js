import {
    GET_SUBJECTS_REQUEST,
    GET_SUBJECTS_SUCCESS,
    GET_SUBJECTS_FAILURE,
    ADD_SUBJECT_REQUEST,
    ADD_SUBJECT_SUCCESS,
    ADD_SUBJECT_FAILURE,
    DELETE_SUBJECT_REQUEST,
    DELETE_SUBJECT_SUCCESS,
    DELETE_SUBJECT_FAILURE,
} from '../actions/subjectActions';

const initialState = {
    loading: false,
    error: null,
    subjectList: []
}

const subjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUBJECTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GET_SUBJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                subjectList: state.subjectList.concat(action.payload)
            }
        case GET_SUBJECTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_SUBJECT_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case ADD_SUBJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                subjectList: state.subjectList.concat(action.payload)
            }
        case ADD_SUBJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_SUBJECT_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case DELETE_SUBJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                subjectList: state.subjectList.filter(subject => {
                    return subject._id !== action.payload
                })
            }
        case DELETE_SUBJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default subjectReducer;