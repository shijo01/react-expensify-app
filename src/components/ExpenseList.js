import {connect} from 'react-redux'
import React from 'react'
import ExpenseListItem from "./ExpenseListItem";
import expensesSelector from '../selectors/expenses'

export const ExpenseList = (props) => {
    return (
        <div className='content-container'>
            <div className='list-header'>
                <div className='show-for-mobile'>Expenses</div>
                <div className="show-for-larger-screen">Expense</div>
                <div className="show-for-larger-screen">Amount</div>
            </div>
            <div className='list-body'>
                {
                    props.expenses.length === 0 ? (
                        <div className='list-item list-item--message'>
                            <p>No expenses</p>
                        </div>

                    ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem
                                key={expense.id}
                                {...expense}
                            />
                        })
                    )
                }
            </div>

        </div>
    )
};

const mapStateToProps = (state) => ({
        expenses: expensesSelector(state.expenses, state.filter)
    }
);

export default connect(mapStateToProps)(ExpenseList);
