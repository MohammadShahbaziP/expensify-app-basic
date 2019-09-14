import authReducer from '../../reducers/auth'

test('should handle logIn',()=>{
    const action = {
        type:'LOGIN',
        uid:1
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({
        uid:1
    })
})

test('should handle logOut',()=>{
    const action = {
        type:'LOGOUT'
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual({})
})