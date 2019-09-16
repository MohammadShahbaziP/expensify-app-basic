import React from "react"
import { connect } from 'react-redux'
import { startEditExpense } from '../actions/expenses/expense'
import ExpenseForm from './ExpenseFormList'
import { startRemoveExpense } from '../actions/expenses/expense'

export class ExpenseEditPage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="summery">
                    <div className="container">
                        <h1 className="summery__title">Edit expense </h1>
                    </div>
                </div>
                <div className="container">
                    <ExpenseForm
                        edit={true}
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                        onClick={this.onClick}
                    />
                    
                </div>


            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    removeExpense: ({ id }) => dispatch(startRemoveExpense(id)),
    editExpense: (id, expense) => dispatch(startEditExpense(id, expense))
})
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEditPage)