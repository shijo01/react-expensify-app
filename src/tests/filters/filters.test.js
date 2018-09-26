import {setTextFilter, setEndDate, setStartDate, sortByDate, sortByAmount} from '../../actions/filters'
import moment from 'moment';

test('Should generate set start date action object', () => {
    const acton = setStartDate(moment(0));
    expect(acton).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});
test('Should generate set end date action object', () => {
    const acton = setEndDate(moment(1000));
    expect(acton).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1000)
    });
});

test('Should generate set set text filter', () => {
    const action = setTextFilter("amount");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "amount"
    });
});
test('Should generate set set text filter for default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});
test('Should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});