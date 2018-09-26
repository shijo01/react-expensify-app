import {connect} from 'react-redux'
import React from 'react'
import ExpenseListItem from "./ExpenseListItem";
import expensesSelector from '../selectors/expenses'

export const ExpenseList = (props) => {
    return (
        <div>
            {
                props.expenses.map((expense) => {
                    return <ExpenseListItem
                        key={expense.id}
                        {...expense}
                    />
                })
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
        expenses: expensesSelector(state.expenses, state.filter)
    }
);

export default connect(mapStateToProps)(ExpenseList);
