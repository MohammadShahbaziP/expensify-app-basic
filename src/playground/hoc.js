import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props)=>{
    return (
        <div>
            <h3> info </h3>
            <p>{props.info}</p>
        
        </div>
    )
}

const requireAuthentication = (WrappedComponenet)=>{
    return (porps) =>(
        <div>
            {porps.isAuthenticated ? <WrappedComponenet {...porps} /> : <p>please login</p>}
        
        </div>
    )
}
const Member = requireAuthentication(Info)
ReactDOM.render(<Member isAuthenticated={false} info='sllllllllllllllllllllllm' />, document.getElementById('app'))