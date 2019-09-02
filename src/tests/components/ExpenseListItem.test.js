import React from 'react'
import  ExpenseListItem  from '../../components/ExpenseListItem'
import { shallow } from 'enzyme'
import expenses from '../fixturs/expenseList';

test('should render ExpenseListItem',()=>{
    const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot()

})
