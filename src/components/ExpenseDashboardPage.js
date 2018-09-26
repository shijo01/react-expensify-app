import React from "react";
import ExpenseList from './ExpenseList'
import ExpenseListFilters from "./ExpenseListFilters"

const ExpenseDashboardPage = () => (
    <div>
        Expense Dashboard page
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;