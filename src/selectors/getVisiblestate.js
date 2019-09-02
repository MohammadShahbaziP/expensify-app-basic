import moment from 'moment'

const getVisibleExpense = (expenses, filters)=>{
    return expenses.filter((expense)=>{
        const startDateMatch= filters.startAt ? moment(expense.createdAt).isSameOrAfter(filters.startAt):true
        const endDateMatch =  filters.endAt ? moment(expense.createdAt).isSameOrBefore(filters.endAt):true
        const isTextMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase())
        return startDateMatch && endDateMatch && isTextMatch
    }).sort((a, b)=>{
        if(filters.sortBy === 'date'){
            return a.createdAt < b.createdAt ?1:-1
        }else if(filters.sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}
export default getVisibleExpense