import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(this.props.amount) : moment(),
            calendareFocused: false,
            error: ''
        }
    }

    handelChangeDescription = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))

    }
    handelChangeNote = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))

    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }

    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendareFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.amount && !this.state.description) {
            this.setState({ error: 'please fill the amount and description' })
        } else {
            this.setState({ error: '' })
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (


            <form className="form" onSubmit={this.onSubmit} >
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type='text'
                    className="text-input"
                    autoFocus
                    placeholder='Description'
                    value={this.state.description}
                    onChange={this.handelChangeDescription}
                />
                <input
                    type='text'
                    className="text-input"
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
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder='Note'
                    className="textarea"
                    value={this.state.value}
                    onChange={this.handelChangeNote}
                />
                <div className="form__actions">
                    <button className="btn btn--secondary">{this.props.edit ? 'Edit' : 'Add'} expense</button>
                    {this.props.edit && <button className="btn btn--danger" onClick={this.props.onClick}>remove</button>}
                </div>
                
            </form>

        )
    }

}