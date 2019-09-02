import {addExpense, removeExpense, editExpense} from '../../actions/expenses/expense'
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
    const value = addExpense()
    expect(value).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id:expect.any(String)
    
        }
    })
})