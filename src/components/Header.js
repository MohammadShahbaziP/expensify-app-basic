import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () =>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink><br />
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink><br />
       
        
    
    
    
    </header>
)
export default Header