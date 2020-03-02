import { createStore, combineReducers, applyMiddleware } from 'redux';
import resourceReducer from './reducers/resourceReducer';
import subjectReducer from './reducers/subjectReducer';
import authReducer from './reducers/authReducer';
import { USER_LOGOUT } from './actions/authActions';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const appReducer = combineReducers({
    resources: resourceReducer,
    subjects: subjectReducer,
    auth: authReducer
})

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === USER_LOGOUT) {
        state = undefined;
        localStorage.clear();
    } 
    return appReducer(state, action);
};

export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

