import React from 'react'
import NotFound from '../../components/NotFound'
import { shallow } from 'enzyme'

test('should Render NotFound Componenet Correctly',()=>{
    const wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()

})