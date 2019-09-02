import { createStore, combineReducers } from "redux"
import uuid from 'uuid'

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startAt: undefined,
    endAt: undefined
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
const setFilterText = (text='')=>({
    type:'FILTER_TEXT',
    text
})
const sortByAmount = ()=>({
    type:'SORT_BY_AMOUNT'
})
const sortByDate = ()=>({
    type:'SORT_BY_DATE'
})
const setStartDate =(timeStamp)=>({
    type:'SET_START_DATE',
    timeStamp
})
const setEndDate= (timeStamp)=>({
    type:'SET_END_DATE',
    timeStamp
})

const expenseReducerDefaultState = []
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update

                    }
                }else{
                    return expense
                }
            })
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id)
        default:
            return state
    }
}


const removeExpense = ({id} = {})=>({
    type:'REMOVE_EXPENSE',
    id
})

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0


    } = {}) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    })

const editExpense= (id, update)=>({
    type:'EDIT_EXPENSE',
    id,
    update
})


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer

    })
)
const getVisibleExpense = (expenses, filters)=>{
    return expenses.filter((expense)=>{
        const startDateMatch= typeof filters.startAt !== 'number' || expense.createdAt >= filters.startAt
        const endDateMatch = typeof filters.endAt !== 'number' || expense.createdAt <= filters.endAt
        const isTextMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase())
        return startDateMatch && endDateMatch && isTextMatch
    }).sort((a, b)=>{
        if(filters.sortBy === 'date'){
            return a.createdAt < b.createdAt ?1:-1
        }else if(filters.sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
store.subscribe(() => {
    const state = store.getState()
    const visible = getVisibleExpense(state.expenses, state.filters)
    console.log(visible)
})

const expenseOne = store.dispatch(addExpense({ description:'rent', amount:100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({ description:'coffe', amount:1303 ,createdAt:-1000}))
//store.dispatch(removeExpense({ id:expenseOne.expense.id }))
//store.dispatch(editExpense(expenseTwo.expense.id, { amount : 500}))
//store.dispatch(setFilterText('rent'))
//store.dispatch(setFilterText())
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
//store.dispatch(setStartDate(150))
//store.dispatch(setStartDate())
//store.dispatch(setEndDate(168))