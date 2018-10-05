import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase'
import {startSetExpenses} from "./actions/expenses";
import {login, logout} from "./actions/auth";


const expensesStore = configureStore();
const jsx = (
    <Provider store={expensesStore}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading expenses...</p>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        expensesStore.dispatch(login(user.uid));
        expensesStore.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
        console.log('Logged in');
    } else {
        renderApp();
        history.push('/');
        console.log('Logged out');
        expensesStore.dispatch(logout());
    }
});