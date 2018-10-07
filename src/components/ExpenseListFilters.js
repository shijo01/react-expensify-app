import React from "react"
import {connect} from 'react-redux'
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";
import {DateRangePicker, SingleDatePicker} from "react-dates";
import 'react-dates/initialize'

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate, endDate} = {}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}));
    };

    render() {
        return (
            <div className="content-container">
                <div className="filter-group">
                    <div className='filter-group__item'>
                        <input
                            className="text-input"
                            placeholder='Search expenses'
                            type="text"
                            value={this.props.filters.text}
                            onChange={
                                (e) => {
                                    this.props.dispatch(setTextFilter(e.target.value));
                                }
                            }
                        />
                    </div>
                    <div className='filter-group__item'>
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={
                                (e) => {
                                    if (e.target.value === 'date') {
                                        this.props.dispatch(sortByDate());
                                    } else if (e.target.value === 'amount') {
                                        this.props.dispatch(sortByAmount())
                                    }
                                }
                            }
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>

                    </div>
                    <div className='filter-group__item'>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            startDateId={"0"}
                            endDateId={"1"}
                            numberOfMonths={2}
                            isOutsideRange={() => false}
                            showClearDates={true}

                        />
                    </div>
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        filters: state.filter
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);
