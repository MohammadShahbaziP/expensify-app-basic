import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({startLogout}) =>(
    <header className="header">
        <div className="container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title" exact={true}>

                    <h1>Expensify</h1>
                </Link>

                <button className="btn" onClick={startLogout} >Logout</button>
        
                </div>        
        </div>
    
    
    
    </header>
)
const mapDispatchToProps=(dispatch)=>{
    return{
        startLogout: ()=>dispatch(startLogout())
    }
}
export default connect(undefined,mapDispatchToProps)(Header)