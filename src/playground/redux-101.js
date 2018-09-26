import {createStore} from "redux";

// Without destructuring
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

//With destructuring with default value
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: "RESET"
});


//Reducers
// 1. Pure functions
// 2. Never modify state or action inside a reducer
const storeReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
                ;
        case
        'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case
        'RESET'
        :
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(storeReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 89}));
store.dispatch(setCount());