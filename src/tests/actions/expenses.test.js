import {startAddExpense ,addExpense, removeExpense, editExpense} from '../../actions/expenses/expense'
import expenses from '../fixturs/expenseList'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import  database  from '../../firebase/firebase'
const createStore = configureMockStore([thunk])

test('test editExpense actions',()=>{
    const value= editExpense(1241,{amount:200})
    expect(value).toEqual({
        type:'EDIT_EXPENSE',
        id:1241,
        update:{
            amount:200
        }
    })
})

test('should add expense with default value',()=>{
    const value = addExpense(expenses[1])
    expect(value).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[1]
    })
})

test('should add expense to database store', (done)=>{
    const store = createStore({})
    const expensesData = {
        description: 'Mouse',
        amount: 30000,
        createdAt: 234126,
        note: 'sdfga'
    }
    store.dispatch(startAddExpense(expensesData)).then(()=>{
        const action =store.getActions()
        expect(action[0].toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expensesData
            }
        }))
        return database.ref(`expenses/${action[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expensesData)
        done()
    })
    

})