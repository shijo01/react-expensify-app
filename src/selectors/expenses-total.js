const getTotalExpensesAmount = (expenses) => {
    return expenses
        .map((expense) => (expense.amount))
        .reduce((accumulator, value) => (accumulator + value), 0);
};

export default getTotalExpensesAmount;