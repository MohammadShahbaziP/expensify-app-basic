import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux'
import {startSetExpense} from './actions/expenses/expense'
import configStore from './store/configureStore'
import 'normalize.css/normalize.css'
import  './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
const store = configStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<p>loading...</p>, document.getElementById('app'))
store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'))
})
 