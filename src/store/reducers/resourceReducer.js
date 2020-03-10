import {
    GET_RESOURCES_REQUEST,
    GET_RESOURCES_SUCCESS,
    GET_RESOURCES_FAILURE,
    ADD_RESOURCE_REQUEST,
    ADD_RESOURCE_SUCCESS,
    ADD_RESOURCE_FAILURE,
    EDIT_RESOURCE_REQUEST,
    EDIT_RESOURCE_SUCCESS,
    EDIT_RESOURCE_FAILURE,
    DELETE_RESOURCE_REQUEST,
    DELETE_RESOURCE_SUCCESS,
    DELETE_RESOURCE_FAILURE,
} from '../actions/resourceActions';

const initialState = {
    loading: false,
    error: null,
    resourceList: []
}

const resourceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESOURCES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case GET_RESOURCES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                resourceList: state.resourceList.concat(action.payload)
            }
        case GET_RESOURCES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_RESOURCE_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case ADD_RESOURCE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                resourceList: state.resourceList.concat(action.payload)
            }
        case ADD_RESOURCE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case EDIT_RESOURCE_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case EDIT_RESOURCE_SUCCESS:
            let updatedIndex = state.resourceList.findIndex(
                obj => obj._id === action.payload._id
            )
            return {
                ...state,
                loading: false,
                error: null,
                resourceList: state.resourceList.map((resource, index) => {
                    if (index !== updatedIndex) {
                        return resource;
                    } else {
                        return {
                            ...resource,
                            ...action.payload
                        }
                    }
                })
            }
        case EDIT_RESOURCE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DELETE_RESOURCE_REQUEST:
            return {
                ...state,
                error: null,
                loading: true,
            }
        case DELETE_RESOURCE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                resourceList: state.resourceList.filter(resource => {
                    return resource._id !== action.payload
                })
            }
        case DELETE_RESOURCE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default resourceReducer;