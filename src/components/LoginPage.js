import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = (props)=>(
    <div className="login-page">
        <div className="login-page__box">
            <h1 className="login-page__title">Expensify</h1>
            <p>it's time to manage your expensis</p>
            <button className="btn btn--secondary" onClick={props.startLogin}>Login with Google</button>
        </div>
    
    </div>
)

const mapDispatchToProps=(dispatch)=>{
    return {
        startLogin:()=>dispatch(startLogin())
    }
}
export default connect(undefined,mapDispatchToProps)(LoginPage)