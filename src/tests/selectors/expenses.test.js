import moment from 'moment'
import getVisibleExpense from '../../selectors/getVisiblestate'
import expenses from '../fixturs/expenseList'
test('Should filter by text', ()=>{
    const filters={
        text:'g',
        startAt:undefined,
        endAt:undefined,
        sortBy:'date'
    }
    const action = getVisibleExpense(expenses,filters)
    expect(action).toEqual([expenses[2],expenses[0]])
})

test('Should filter by startDate', ()=>{
    const filters={
        text:'',
        startAt:moment(0),
        endAt:undefined,
        sortBy:'date'
    }
    const action = getVisibleExpense(expenses,filters)
    expect(action).toEqual([expenses[2],expenses[0]])
})

test('Should filter by endDate', ()=>{
    const filters={
        text:'',
        startAt:undefined,
        endAt:moment(0),
        sortBy:'date'
    }
    const action = getVisibleExpense(expenses,filters)
    expect(action).toEqual([expenses[0],expenses[1]])
})

test('Should filter by sortByDate', ()=>{
    const filters={
        text:'',
        startAt:undefined,
        endAt:undefined,
        sortBy:'date'
    }
    const action = getVisibleExpense(expenses,filters)
    expect(action).toEqual([expenses[2],expenses[0],expenses[1] ])
})

test('Should filter by sortByDate', ()=>{
    const filters={
        text:'',
        startAt:undefined,
        endAt:undefined,
        sortBy:'amount'
    }
    const action = getVisibleExpense(expenses,filters)
    expect(action).toEqual([expenses[1],expenses[2],expenses[0] ])
})