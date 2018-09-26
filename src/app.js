import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from "./actions/expenses";
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';


const expensesStore = configureStore();
console.log(expensesStore.getState());
expensesStore.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
expensesStore.dispatch(addExpense({description: 'Library fee', amount: 50, createdAt: 1500}));
expensesStore.dispatch(addExpense({description: 'Mess fee', amount: 275, createdAt: -1900}));

const jsx = (
    <Provider store={expensesStore}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));