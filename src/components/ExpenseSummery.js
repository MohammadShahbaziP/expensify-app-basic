import React from 'react'
import { connect } from 'react-redux'
import getTotalAmount from '../selectors/getTotalAmount'
import getVisibleState from '../selectors/getVisiblestate'
import numeral from 'numeral'
export const ExpenseSummery = (props) =>{
    const FilteredExpenses = getVisibleState(props.expenses, props.filters)
    const total = getTotalAmount(FilteredExpenses)
    const expensesWord= FilteredExpenses.length === 1 ? 'expense' : 'expenses'
    return(
        <div>
            <p>Viewing {FilteredExpenses.length} {expensesWord} totaling {numeral(total / 100).format('$0,0.00')}</p>
        </div>
    )
}

const mapStatetoProps= (state)=>({
    expenses : state.expenses,
    filters: state.filters
})
export default connect(mapStatetoProps)(ExpenseSummery )