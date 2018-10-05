import database from '../firebase/firebase';


//ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = ((expenseData = {}) => {
    const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = expenseData;
    const expense = {description, note, createdAt, amount};

    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database
            .ref(`users/${uid}/expenses`)
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                        id: ref.key,
                        ...expense
                    })
                );
            });
    };
});

//REMOVE_EXPENSE
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

export const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id));
        });
    };
};

//EDIT_EXPENSE
export const editExpense = ({id, updates} = {}) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    };
};

export const startEditExpense = ({id, updates}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense({id, updates}));
        });
    };
};

//SET_EXPENSES
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSE',
        expenses
    }
};

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapShot) => {
                expenses.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};






