import React from 'react'
import ExpenseForm from '../../components/ExpenseFormList'
import { shallow } from 'enzyme'
import expenses from '../fixturs/expenseList'
import moment from 'moment'
test('should render ExpenseForm ', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expenseForm with Data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow (<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{ }
    })
    
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('should set on input change ',()=>{
    const value = 'description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set on textarea change ',()=>{
    const value = 'description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change',{
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set on amount change with valid data ',()=>{
    const value = '122.2'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should set on amount change with valid data ',()=>{
    const value = '122.223'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
})
test('should call onSubmit with for valid form submission',()=>{
    const onSubmitSpy  = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt

    })
})
test('should set new date on date change',()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calender focusr on focused change change',()=>{
    const focused= true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendareFocused')).toEqual(true)
})