import {createStore , combineReducers, applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import expensesReducer from '../reducers/expense'
import filterReducer from '../reducers/filter'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default () =>{
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer
    
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
} 