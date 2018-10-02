import {
    addExpense,
    editExpense,
    removeExpense,
    startAddExpense,
    setExpenses,
    startRemoveExpense, startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt
        }
    });
    database.ref('expenses').set(expensesData).then(() => {
        done();
    });
});

test('Should setup remove expense action object', () => {
    const action = removeExpense('124');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '124'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense(id))
        .then(() => {
            const action = store.getActions();
            expect(action[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            });
            return database.ref(`expenses/${id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});

test('Should setup edit expense action object', () => {
    const action = editExpense({id: 123, updates: {description: "Rent", amount: 100}});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: {description: "Rent", amount: 100}
    });
});

test('should edit expense in firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    const updates = {description: "Rent", amount: 100};

    store.dispatch(startEditExpense({id, updates}))
        .then(() => {
            const action = store.getActions();
            expect(action[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });

            return database.ref(`expenses/${id}`).once("value");
        })
        .then((snapshot) => {
            delete expenses[1].id;
            expect(snapshot.val()).toEqual({
                ...expenses[1],
                ...updates
            });
            done();

        });
});

test('Should setup add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    store.clearActions();
    store.dispatch(startAddExpense(expenses[2]))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    ...expenses[2],
                    id: expect.any(String)
                }
            });
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            delete expenses[2].id;
            expect(snapshot.val()).toEqual({
                ...expenses[2]
            });
            done();
        });

});

test('should add expense with default values to database and store', (done) => {
    const store = createMockStore({});
    store.clearActions();
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    ...expenseData,
                    id: expect.any(String)
                }
            });
            return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual({
                ...expenseData,
            });
            done();
        });
});

test('should set up set expense object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses
    });
});
