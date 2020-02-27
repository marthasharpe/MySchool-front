import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { LOGIN_SUCCESS } from './store/actions/actionTypes';

const token = localStorage.getItem('token');
if (token) {
    store.dispatch({ type: LOGIN_SUCCESS })
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

