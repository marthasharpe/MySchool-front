import { createStore, combineReducers, applyMiddleware } from 'redux';
import resourceReducer from './reducers/resourceReducer';
import subjectReducer from './reducers/subjectReducer';
import userReducer from './reducers/userReducer';
import { USER_LOGOUT } from './actions/userActions';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// save redux state to session storage
const saveToSessionStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch(e) {
        console.log(e);
    }
}

// get redux state from session storage
const loadFromSessionStorage = () => {
    try {
        const serializedState = sessionStorage.getItem('state');
        if(serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch(e) {
        console.log(e);
        return undefined
    }
}

// combine reducers
const appReducer = combineReducers({
    resources: resourceReducer,
    subjects: subjectReducer,
    user: userReducer
})

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === USER_LOGOUT) {
        state = undefined;
        sessionStorage.clear();
    } 
    return appReducer(state, action);
};

const persistedState = loadFromSessionStorage()

// create Redux store with devtools and middleware
const store = createStore(
    rootReducer,
    // overwrite keys from root reducer with persisted state
    persistedState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

// pass current state to session storage
store.subscribe(() => saveToSessionStorage(store.getState()))

export default store;