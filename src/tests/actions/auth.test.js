import { login, logout } from "../../actions/auth"



test('should handle login action',()=>{
    const uid=1
    const action = login(uid)
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })
})
test('should handle logout action',()=>{
    const action = logout()
    expect(action).toEqual({
        type:'LOGOUT'
    })
})