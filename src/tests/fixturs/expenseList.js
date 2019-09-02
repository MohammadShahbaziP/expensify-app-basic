import moment from 'moment'
const expenses = [{
    id:'1',
    amount:200,
    description:'gum',
    note:'',
    createdAt:0
}, {
    id:'2',
    amount:2400,
    description:'rent',
    note:'',
    createdAt:moment(0).subtract(4,'days').valueOf()
} ,{
    id:'3',
    amount:240,
    description:'gass',
    note:'',
    createdAt:moment(0).add(4,'days').valueOf()
}]
export default expenses