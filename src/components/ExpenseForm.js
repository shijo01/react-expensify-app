import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';

const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined,
            buttonText: props.expense ? 'Save Expense' : 'Add Expense'
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));

    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState(() => ({createdAt}));
    };

    onCalenderFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'}));
        } else {
            this.setState(() => ({error: undefined}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }

    };

    render() {
        return (
            <form
                className='form'
                onSubmit={this.onSubmit}
            >
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    type='text'
                    placeholder='Description'
                    className='text-input'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    className='text-input'
                    type='number'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onCalenderFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => {
                        return false;
                    }}
                />
                <textarea
                    className='text-area'
                    onChange={this.onNoteChange}
                    placeholder='Add a note for your expense(optional)'
                    value={this.state.note}
                >

                    </textarea>
                <div>
                    <button className='login-button'>{this.state.buttonText}</button>
                </div>

            </form>
        );
    }

}