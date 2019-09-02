import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import configStore from './store/configureStore'
import {addExpense} from './actions/expenses/expense'
import {setFilterText} from './actions/filters/filter'
import getVisibleExpense from './selectors/getVisiblestate'
import 'normalize.css/normalize.css'
import  './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configStore()
store.dispatch(addExpense({description:'gass bill' , amount :300, createdAt: 1000}))
store.dispatch(addExpense({description:'water bill' , amount :500, createdAt: 20000}))
store.dispatch(addExpense({description:'rent' , amount :456473, createdAt: -20000}))
const data = store.getState()
const state = getVisibleExpense(data.expenses, data.filters)
console.log(state)
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))