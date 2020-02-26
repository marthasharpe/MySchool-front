import { createStore, combineReducers, applyMiddleware } from 'redux';
import resourceReducer from './reducers/resourceReducer';
import subjectReducer from './reducers/subjectReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
    combineReducers({
        resources: resourceReducer,
        subjects: subjectReducer,
        auth: authReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
