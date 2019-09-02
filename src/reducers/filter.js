import moment from 'moment'
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startAt: moment().startOf('month'),
    endAt: moment().endOf('month')
}
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_END_DATE':
            return {
                ...state,
                endAt:action.timeStamp
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startAt:action.timeStamp
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:'amount'
            }
        case 'FILTER_TEXT':
            return {
                ...state,
                text:action.text
            }
        default:
            return state
    }
}
export default filterReducer