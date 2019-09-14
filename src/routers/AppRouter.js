import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import LoginPage from '../components/LoginPage'
import AddExpensePage from "../components/AddExpensePage"
import ExpenseEditPage from "../components/ExpenseEditPage"
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRote'
import NotFound from "../components/NotFound"
import createHistory from 'history/createBrowserHistory'

export const history =createHistory()

const AppRouter=()=> (
    <Router history={history}>
        <div>
            
            <Switch>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" exact component={ExpenseEditPage}  />

                <Route component={NotFound} />
            </Switch>
        </div>
    
    </Router>


)
export default AppRouter