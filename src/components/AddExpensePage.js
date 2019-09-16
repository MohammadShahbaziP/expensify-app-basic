import React from 'react'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses/expense'
import ExpenseForm from './ExpenseFormList'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="summery">
                    <div className="container">
                        <h1 className="summery__title">Add expense </h1>
                    </div>


                </div>
                <div className="container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>

            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(startAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage)