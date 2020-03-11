import { createStore, combineReducers, applyMiddleware } from 'redux';
import resourceReducer from './reducers/resourceReducer';
import subjectReducer from './reducers/subjectReducer';
import userReducer from './reducers/userReducer';
import { USER_LOGOUT } from './actions/userActions';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const appReducer = combineReducers({
    resources: resourceReducer,
    subjects: subjectReducer,
    user: userReducer
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

