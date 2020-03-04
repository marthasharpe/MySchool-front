import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { authLogin } from './store/actions/authActions';

// stay signed in during a session
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

if (token && userId) {
    authLogin();
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

