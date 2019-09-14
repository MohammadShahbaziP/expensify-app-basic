import React from 'react'
import {Header} from '../../components/Header'
import { shallow } from 'enzyme'

test('should Render Header Componenet Correctly',()=>{
    const wrapper = shallow(<Header startLogout={()=>{}} />)
    expect(wrapper).toMatchSnapshot()

})
test('should handle login button ',()=>{
    const startLogout=jest.fn()
    const wrapper = shallow(<Header startLogout={startLogout} />)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})