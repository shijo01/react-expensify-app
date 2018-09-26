import {createStore, combineReducers} from 'redux';
import uuid from "uuid";

//Action generators
//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});
//EDIT_EXPENSE
const editExpense = ({id, updates} = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = (startDate = undefined) => ({
        type: 'SET_START_DATE',
        startDate
    }
);
//SET_END_DATE
const setEndDate = (endDate = undefined) => ({
        type: 'SET_END_DATE',
        endDate
    }
);

//Default states
const expensesReducerDefaultState = [];
const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

//Reducers
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id} = {}) => (id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} = {}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((e1, e2) => {
        if (sortBy === 'amount') {
            if (e1.amount < e2.amount) return 1;
            else if (e1.amount > e2.amount) return -1;
            else return 0;
        } else if (sortBy === 'date') {
            if (e1.createdAt < e2.createdAt) return 1;
            else if (e1.createdAt > e2.createdAt) return -1;
            else return 0;
        }
        return 0;
    })
};

//Store
const expensesStore = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

expensesStore.subscribe(() => {
    const visibleExpenses = getVisibleExpenses(expensesStore.getState().expenses, expensesStore.getState().filter);
    console.log(visibleExpenses);
    // console.log(expensesStore.getState().filter)
});

const expenseOne = expensesStore.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = expensesStore.dispatch(addExpense({description: 'Library fee', amount: 50, createdAt: 1500}));
const expenseThree = expensesStore.dispatch(addExpense({description: 'Mess fee', amount: 275, createdAt: -1900}));
expensesStore.dispatch(editExpense({id: expenseOne.expense.id, updates: {amount: 150}}));
// expensesStore.dispatch(removeExpense(expenseTwo.expense.id));

// expensesStore.dispatch(setTextFilter("Rent"));
// expensesStore.dispatch(setTextFilter(""));

expensesStore.dispatch(sortByAmount());
expensesStore.dispatch(sortByDate());

expensesStore.dispatch(setStartDate(-2000));
expensesStore.dispatch(setEndDate(2000));
expensesStore.dispatch(setTextFilter("E"));
// expensesStore.dispatch(setStartDate());
