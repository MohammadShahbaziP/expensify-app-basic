import filterReducer from '../../reducers/filter'
import moment from 'moment'
test('should set up default filters value', ()=>{
    const state = filterReducer(undefined,{ type:'@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startAt: moment().startOf('month'),
        endAt: moment().endOf('month')
    })
})

test('should set Sort by to amount',()=>{
    const state = filterReducer(undefined,{ type:'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})


test('should set Sort by to date',()=>{
    const CurrentState={
        text: '',
        sortBy: 'amount',
        startAt: moment().startOf('month'),
        endAt: moment().endOf('month')
    }
    const state = filterReducer(CurrentState,{ type:'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})

test('should set text state',()=>{
    const state = filterReducer(undefined,{ type:'FILTER_TEXT', text:'e' })
    expect(state.text).toBe('e')
})

test('should set startAt filter state',()=>{
    const state = filterReducer(undefined,{ type:'SET_START_DATE', timeStamp:12 })
    expect(state.startAt).toBe(12)
})

test('should set endAt filter state',()=>{
    const state = filterReducer(undefined,{ type:'SET_END_DATE', timeStamp:12 })
    expect(state.endAt).toBe(12)
})