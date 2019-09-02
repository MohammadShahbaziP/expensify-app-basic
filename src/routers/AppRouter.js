import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import AddExpensePage from "../components/AddExpensePage"
import ExpenseHelpPage from "../components/ExpenseHelpPage"
import ExpenseEditPage from "../components/ExpenseEditPage"
import Header from '../components/Header';
import NotFound from "../components/NotFound"
const AppRouter=()=> (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" exact component={ExpenseEditPage}  />
                <Route path="/help" component={ExpenseHelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    
    </BrowserRouter>


)
export default AppRouter