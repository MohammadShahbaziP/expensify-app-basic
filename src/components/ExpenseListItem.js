import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

 const ExpenseListItem = (props)=>(
    <div>
        <Link  to={'/edit/'+props.expense.id} >{props.expense.description}</Link>
        <p>{props.expense.amount}</p>
        
        

    </div>
)
export default ExpenseListItem