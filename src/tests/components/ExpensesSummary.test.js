import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpensesSummary';

test('should correctly render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={19000}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={13} expensesTotal={45967000}/>);
    expect(wrapper).toMatchSnapshot();
});