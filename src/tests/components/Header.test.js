import React from 'react'
import Header from '../../components/Header'
import { shallow } from 'enzyme'

test('should Render Header Componenet Correctly',()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()

})