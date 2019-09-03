import React from 'react'
import { shallow } from 'enzyme'
import  {ExpenseSummery} from '../../components/ExpenseSummery'
import expenses from '../fixturs/expenseList'
import {filter, altFilter} from '../fixturs/filters'

test('should render expense summery with no filters',()=>{
    const wrapper = shallow(<ExpenseSummery expenses={expenses} filters={filter} /> )
    expect(wrapper).toMatchSnapshot()
})

test('should render expense summery with filters',()=>{
    const wrapper = shallow(<ExpenseSummery expenses={expenses} filters={altFilter} /> )
    expect(wrapper).toMatchSnapshot()
})