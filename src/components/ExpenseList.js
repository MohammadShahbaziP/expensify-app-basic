import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpense from '../selectors/getVisiblestate'

export const ExpenseList = ({expenses})=>(
    <div className="container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expenses</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        {expenses.length === 0 ? (
            <div className="list-item list-item--message">
                <p>No expenses</p>
            </div>
        ) : (
           
             expenses.map((expense)=>(
                <ExpenseListItem key={expense.id} expense={expense}  />
            ))
            
        )}

    
    </div>
) 
const mapStatetoProps = (state)=>{
    return {
        expenses:getVisibleExpense(state.expenses, state.filters)
    }
}
export default connect(mapStatetoProps)(ExpenseList)