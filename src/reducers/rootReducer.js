import { SET_SUBJECTS, ADD_RESOURCE } from '../actions/actionCreators';

const initialState = {
    subjects: [
        {
            tab: "React"
        },
        {
            tab: "Redux"
        }
    ],
    sources: [
        {
            title: "React for Beginners",
            description: "Kent C. Dodds builds React from scratch.",
            link: "https://egghead.io/courses/the-beginner-s-guide-to-react",
            status: "Complete",
            subject: "React"
        },
        {
            title: "React Docs",
            description: "Official documentation for React.",
            link: "https://reactjs.org/docs/getting-started.html",
            status: "In Progress",
            subject: "React"
        },
        {
            title: "Redux Docs",
            description: "Official Redux documentation.",
            link: "https://redux.js.org/",
            status: "Todo",
            subject: "Redux"
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBJECTS:
            return {
                ...state,
                subjects: [...state.subjects, action.payload],
            }
        case ADD_RESOURCE:
            return {
                ...state,
                sources: [...state.sources, action.payload],
            }
        default:
            return state
    }
}

export default rootReducer;