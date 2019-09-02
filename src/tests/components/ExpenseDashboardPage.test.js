import React from 'react'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import { shallow } from 'enzyme'

test('should Render ExpenseDashboardPage Componenet Correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()

})