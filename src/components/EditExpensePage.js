import React from "react";
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {editExpense, removeExpense, startEditExpense, startRemoveExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Modify Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense({
                            id: props.expense.id,
                            updates: expense
                        }));
                        props.history.push('/');
                    }}
                />

                <button className='login-button login-button--remove'
                        onClick={
                            () => {
                                props.dispatch(startRemoveExpense(props.expense.id));
                                props.history.push('/');
                            }
                        }>
                    Delete Expense
                </button>
            </div>


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