import { createStore, combineReducers, applyMiddleware } from 'redux';
import resourceReducer from './reducers/resourceReducer';
import subjectReducer from './reducers/subjectReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
    combineReducers({
        resources: resourceReducer,
        subjects: subjectReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
