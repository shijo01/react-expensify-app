import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase'


const expensesStore = configureStore();
const jsx = (
    <Provider store={expensesStore}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));