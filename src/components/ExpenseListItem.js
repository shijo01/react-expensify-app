import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'in', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'K',
        million: 'M',
        billion: 'B',
        trillion: 'T'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '₹'
    }
});

numeral.locale('in');

export const ExpenseListItem = ({dispatch, id, amount, description, createdAt} = {}) => (
    <div>
        <NavLink to={'/edit/' + id}>
            <h3>{description}</h3>
        </NavLink>
        <p>
            {numeral(amount/100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMM Do, YYYY')}
        </p>
    </div>
);


export default ExpenseListItem;
