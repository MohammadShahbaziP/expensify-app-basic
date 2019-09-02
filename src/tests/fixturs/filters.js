import moment from 'moment'

const filter = {
    text: '',
    sortBy: 'date',
    startAt : undefined,
    endAt: undefined
}

const altFilter = {
    text: 'gum',
    sortBy: 'amount',
    startAt:moment(0),
    endAt:moment(0).add(3,'days')

}
export {filter, altFilter}