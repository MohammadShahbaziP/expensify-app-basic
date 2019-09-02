import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            description:props.expense? props.expense.description :'',
            note:props.expense? props.expense.note :'',
            amount:props.expense? (props.expense.amount / 100).toString() :'',
            createdAt:props.expense? moment(this.props.amount) :moment(),
            calendareFocused:false,
            error:''
        }
    }

    handelChangeDescription = (e)=>{
        const description = e.target.value
        this.setState(()=>({ description }))

    }
    handelChangeNote = (e)=>{
        const note = e.target.value
        this.setState(()=>({ note }))

    }
    onAmountChange= (e)=>{
        const amount = e.target.value
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }))
        }
    }
    onDateChange= (createdAt)=>{
        if (createdAt){
            this.setState(()=>({ createdAt }))            
        }

    }
    onFocusChange= ({ focused })=>{
        this.setState(()=>({ calendareFocused:focused}))
    }
    onSubmit= (e)=>{
        e.preventDefault()

        if(!this.state.amount && !this.state.description){
            this.setState({error: 'please fill the amount and description' })
        }else{
            this.setState({error: '' })
            this.props.onSubmit({
                description:this.state.description,
                note:this.state.note,
                amount:parseFloat(this.state.amount) *100,
                createdAt:this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return(
        <div>
        {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit} >
                <input
                    type='text'
                    autoFocus
                    placeholder='Description'
                    value={this.state.description}
                    onChange={this.handelChangeDescription}
                />
                <input 
                    type='text'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    placeholder='Amount'
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendareFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
                <textarea 
                    placeholder='Note'
                    value={this.state.value}
                    onChange={this.handelChangeNote}
                />
                <button>Add expense</button>
            </form>
        </div>
        )
    }

}