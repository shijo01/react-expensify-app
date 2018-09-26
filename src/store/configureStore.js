import {combineReducers, createStore} from "redux";
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
//Store
export default () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filter: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};
