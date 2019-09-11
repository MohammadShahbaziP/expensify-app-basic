import {startAddExpense ,addExpense, startRemoveExpense, editExpense, setExpense, startEditExpense} from '../../actions/expenses/expense'
import expenses from '../fixturs/expenseList'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import  database  from '../../firebase/firebase'
const createStore = configureMockStore([thunk])

beforeEach((done)=>{
    const expensesData={}
    expenses.forEach(({id , createdAt, amount , description , note})=>{
        expensesData[id]={description , note , amount ,createdAt}
    })
    database.ref('expenses').set(expensesData).then(()=>done())
})
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

test('should set expense ',()=>{
    const value = setExpense(expenses)
    expect(value).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

test('should handle edit expense on firebase',(done)=>{
    const store =createStore({})
    const update={
        description: 'Mouse'

    }
    const { id ,description ,amount ,createdAt , note}=expenses[0]
    
    store.dispatch(startEditExpense(id,update)).then(()=>{
        const action =store.getActions()
        expect(action[0]).toEqual({
            type:'EDIT_EXPENSE',
            id:id,
            update
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual({description ,amount ,createdAt , note,...update})
        done()
    })
    
})

test('should handle remove expense on firebase',(done)=>{
    const store =createStore({})
    store.dispatch(startRemoveExpense(1)).then(()=>{
        const action =store.getActions()
        expect(action[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id:1
        })
        return database.ref(`expenses/${1}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBe(null)
        done()
    })
    
})