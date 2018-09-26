import uuid from "uuid";

//ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});
//EDIT_EXPENSE
export const editExpense = ({id, updates} = {}) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};