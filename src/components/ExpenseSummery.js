import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getTotalAmount from '../selectors/getTotalAmount'
import getVisibleState from '../selectors/getVisiblestate'
import numeral from 'numeral'
export const ExpenseSummery = (props) =>{
    const FilteredExpenses = getVisibleState(props.expenses, props.filters)
    const total = getTotalAmount(FilteredExpenses)
    const expensesWord= FilteredExpenses.length === 1 ? 'expense' : 'expenses'
    return(
        <div className="summery">
            <div className="container">
                <h1 className="summery__title">Viewing <span>{FilteredExpenses.length}</span> {expensesWord} totaling <span>{numeral(total / 100).format('$0,0.00')}</span></h1>
                <div className="summery__actions">
                    <Link to="/create" className="btn btn--secondary">
                        Add expense
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

const mapStatetoProps= (state)=>({
    expenses : state.expenses,
    filters: state.filters
})
export default connect(mapStatetoProps)(ExpenseSummery )