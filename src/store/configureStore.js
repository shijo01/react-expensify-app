import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

//Store
//Redux dev tools extension chrome browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_OMPOSE__ || compose;
export default () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filter: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
};
