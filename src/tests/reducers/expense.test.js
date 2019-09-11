import expenses from '../fixturs/expenseList'
import expenseReducer from '../../reducers/expense'
import expensesReducer from '../../reducers/expense';
test('should set default expense state',()=>{
    const state = expenseReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})
test('should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[0].id
    }
    const state= expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1],expenses[2]])
})

test('should remove expense by Undefined id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'dfg'
    }
    const state= expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
test('should add an expense',()=>{
    const expense={
        id:'4',
        description:'some test',
        amount:34124,
        createdAt:0
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state=expenseReducer(undefined, action)
    expect(state).toEqual([expense])

})
test('should add Edit expense',()=>{
    const update={
        id:'2',
        description:'some test',
        note:'',
        amount:34124,
        createdAt:0
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'2',
        update
        
    }
    const state=expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0],update,expenses[2]])

})
test('should add undefined Edit expense',()=>{
    const update={
        id:'2',
        description:'some test',
        note:'',
        amount:34124,
        createdAt:0
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'5',
        update
        
    }
    const state=expenseReducer(expenses, action)
    expect(state).toEqual(expenses)

})
test('should set expenses',()=>{
    const expenses=expenses
    const action={
        type:'SET_EXPENSES',
        expenses
    }
    const state=expenseReducer(undefined, action)
    expect(state).toEqual(expenses)
})