import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixturs/expenseList'

let wrapper,addExpense,history
beforeEach(()=>{
    history= {push:jest.fn()}
    addExpense=jest.fn()
    wrapper=shallow(<AddExpensePage  history={history} addExpense={addExpense} />)
})

test('should render AddExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot()

})

test('should handle on submit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])

})