import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should setup remove expense action object', () => {
    const action = removeExpense('124');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '124'
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

test('Should setup add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        note: 'August month rent',
        amount: 4500,
        createdAt: 1235654638000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup expense action object with default values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});