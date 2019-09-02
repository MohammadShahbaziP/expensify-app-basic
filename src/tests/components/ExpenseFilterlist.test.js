import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filter , altFilter } from '../fixturs/filters'


let setFilterText , sortByAmount, sortByDate, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setFilterText=jest.fn()
    sortByAmount=jest.fn()
    sortByDate=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    wrapper= shallow(<ExpenseListFilters 
        setFilterText={setFilterText}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        filters={filter}
        
        
        />)
})

test('Should render Expense filter correctly',()=>{
    expect(wrapper).toMatchSnapshot()

})

test('should render filter list with alt filters',()=>{
    wrapper.setProps({
        filters: altFilter
    })
    expect(wrapper).toMatchSnapshot()
})

test('should set text filter input',()=>{
    const text = altFilter.text
    wrapper.find('input').at(0).simulate('change',{
        target:{ value:text }
    })
    expect(setFilterText).toHaveBeenLastCalledWith(text)
})

test('should set sortBy amount input',()=>{
    const text = 'amount'
    wrapper.find('select').simulate('change',{
        target:{ value:text }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should set sortBy date input',()=>{
    const text = filter.sortBy
    wrapper.find('select').simulate('change',{
        target:{ value:text }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should set  dates change  filter',()=>{
    const startDate = altFilter.startAt
    const endDate = altFilter.endAt
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate , endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})