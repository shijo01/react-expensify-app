import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expenseCount, expensesTotal} = {}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : "expenses";
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="login-button"
                          to="/create"
                    >
                        Add Expense
                    </Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filter);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }

};

export default connect(mapStateToProps)(ExpenseSummary);

