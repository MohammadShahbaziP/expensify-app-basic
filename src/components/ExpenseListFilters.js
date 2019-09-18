import React from 'react'
import { connect } from 'react-redux'
import {setFilterText , sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters/filter'
import { DateRangePicker} from 'react-dates'
export class ExpenseListFilters extends React.Component {
    state = {
        focusedCallender:null
    }
    onDatesChange=({startDate , endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange=(focusedInput)=>{
        this.setState(()=>({focusedCallender:focusedInput}))

    }
    onTextChange= (e)=>{
        this.props.setFilterText(e.target.value)
    }

    onSortChange = (e)=>{
        e.target.value === 'date' ? this.props.sortByDate():this.props.sortByAmount()
    }
    render() {
        return(
            <div className="container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            type='text' 
                            placeholder="Search expenses"
                            className="text-input"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                            />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select" 
                            value={this.props.filters.sortBy}  
                            onChange={this.onSortChange}
                        >
                        <option value='date'>Date</option>
                        <option value='amount'>Amount</option>
                        
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startAt}
                        endDate={this.props.filters.endAt}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focusedCallender}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}
                        />
                    </div>
                </div>



        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    setFilterText : (text)=>dispatch(setFilterText(text)),
    setStartDate : (startDate)=>dispatch(setStartDate(startDate)),
    setEndDate : (endDate)=>dispatch(setEndDate(endDate)),
    sortByDate : (date)=> dispatch(sortByDate(date)),
    sortByAmount : (amount)=>dispatch(sortByAmount(amount))
})

const mapStateToProps = (state) =>({
    filters:state.filters
})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters) 