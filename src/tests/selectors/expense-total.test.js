import expenses from '../fixtures/expenses';
import getTotalExpensesAmount from '../../selectors/expenses-total';

test('should return 0 if no expense', () => {
    const result = getTotalExpensesAmount([]);
    expect(result).toBe(0);
});

test('should return correct amount with 1 expense', () => {
    const result = getTotalExpensesAmount([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test("should return corect with multiple expenses", () => {
    const result = getTotalExpensesAmount(expenses);
    expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});