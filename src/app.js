import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux'
import { startSetExpense } from './actions/expenses/expense'
import configStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'
import { login, logout } from './actions/auth';
const store = configStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
let isRendered=false
const renderApp=()=>{
    if (!isRendered){
        ReactDOM.render(jsx, document.getElementById('app'))
        isRendered=true
    }
}
ReactDOM.render(<p>loading...</p>, document.getElementById('app'))


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        
        store.dispatch(startSetExpense()).then(() => {
        renderApp()
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })

    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')

    }
})
