import moment from 'moment';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} = {}) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
        const endDateMatch =  endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') :true;
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

export default getVisibleExpenses;