import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseEditPage } from '../../components/ExpenseEditPage'
import expenses from '../fixturs/expenseList'
let editExpense, removeExpense,history, wrapper,expense

beforeEach(()=>{
    editExpense=jest.fn()
    removeExpense=jest.fn()
    history={push:jest.fn()}
    expense=expenses[0]
    wrapper=shallow(<ExpenseEditPage expense={expense} editExpense={editExpense} removeExpense={removeExpense} history={history} />)

})

test('should render expense edit page correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})
test('should on submit expense form',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])
})

test('should on click remove button',()=>{
    const id = expenses[0].id
    wrapper.find('button').simulate('Click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id})
})