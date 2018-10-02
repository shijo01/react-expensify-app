import React from "react";
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense, startRemoveExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense({
                        id: props.expense.id,
                        updates: expense
                    }));
                    props.history.push('/');
                }}
            />
            <button onClick={
                () => {
                    props.dispatch(startRemoveExpense(props.expense.id));
                    props.history.push('/');
                }
            }>Remove
            </button>
        </div>
    )
};
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }

}
export default connect(mapStateToProps)(EditExpensePage);