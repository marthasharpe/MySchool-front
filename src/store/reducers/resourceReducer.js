import {
    SET_RESOURCES, ADD_RESOURCE, DELETE_RESOURCE
} from '../actions/actionTypes';

const initialState = [
    {
        _id: "5e458d0ba6e618d53ac5bea0",
        title: "Redux Docs",
        description: "The official documentation for Redux.",link: "https://redux.js.org/",
        status: "Todo",
        subject:"Redux"
    },
    {
        _id: "5e5129be0863150004e22da2",
        title: "React Docs",
        description: "The official documentation for React.js.",
        link: "https://reactjs.org/",
        status: "In Progress",
        subject:"React"
    }
]

const resourceReducer = (state = initialState, action) => {
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