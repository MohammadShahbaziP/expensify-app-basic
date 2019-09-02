import {setFilterText , sortByAmount, sortByDate} from '../../actions/filters/filter'
test('set filter text action ',()=>{
    const action = setFilterText()
    const actionWithText = setFilterText('hello')
    expect(action).toEqual({
        type:'FILTER_TEXT',
        text:''
    })
    expect(actionWithText).toEqual({
        type:'FILTER_TEXT',
        text:'hello'
    })
})

test('filter sort actions',()=>{
    const actionSortByDate= sortByDate()
    expect(actionSortByDate).toEqual({
        type:'SORT_BY_DATE'
    })
    const actionSortByAmount= sortByAmount()
    expect(actionSortByAmount).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

