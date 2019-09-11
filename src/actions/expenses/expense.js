import uuid from 'uuid'
import database from '../../firebase/firebase'

const removeExpense = ({id} = {})=>({
    type:'REMOVE_EXPENSE',
    id
})

const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})


export const startAddExpense = (expenses ={})=>{
    return (dispatch)=>{
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenses

        const expense = {description , note, amount ,createdAt}
        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

const editExpense= (id, update)=>({
    type:'EDIT_EXPENSE',
    id,
    update
})

const setExpense =(expenses)=>({
    type:'SET_EXPENSES',
    expenses
})

const startSetExpense=()=>{
    return (dispatch)=>{
        
        return database.ref('expenses').once('value').then((snapsht)=>{
            const expenses=[]
            snapsht.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpense(expenses))
        })        
    }
}
export {addExpense, removeExpense, editExpense, setExpense ,startSetExpense}