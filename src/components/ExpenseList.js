import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpense from '../selectors/getVisiblestate'

export const ExpenseList = ({expenses})=>(
    <div>

        {expenses.length === 0 ? (
            <p>No expenses</p>
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