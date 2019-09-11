import React from "react"
import { connect } from 'react-redux'
import { editExpense } from '../actions/expenses/expense'
import ExpenseForm from './ExpenseFormList'
import {startRemoveExpense} from '../actions/expenses/expense'

export class ExpenseEditPage extends React.Component{
    onSubmit=(expense)=>{
        this.props.editExpense(this.props.expense.id,expense)
        this.props.history.push('/')
    }
    onClick=()=>{
        this.props.removeExpense({id:this.props.expense.id})
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>remove</button>
            
            </div>
            )
    }
}
 

const mapDispatchToProps= (dispatch)=>({
    removeExpense: ({id})=>dispatch(startRemoveExpense(id)),
    editExpense: (id,expense)=>dispatch(editExpense(id,expense))
})
const mapStateToProps = (state, props)=>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id===props.match.params.id
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseEditPage)