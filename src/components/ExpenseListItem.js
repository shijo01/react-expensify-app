import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'

export const ExpenseListItem = ({dispatch, id, amount, description, createdAt} = {}) => (
    <div>
        <NavLink to={'/edit/' + id}>
            <h3>{description}</h3>
        </NavLink>
        <p>Amount: ${amount} Created At:{createdAt}</p>
    </div>
);


export default ExpenseListItem;
