import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth'
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

//Store
//Redux dev tools extension chrome browser
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
export default () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filter: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
};
