class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggle=this.handleToggle.bind(this)

        this.state={
            show :false
        }
    }
    handleToggle(){
        this.setState((pre)=>{
            return {
                show: !pre.show
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.show ? "hide" : "show"} details </button>
                {this.state.show && <p>show :)</p>}
            
            
            </div>
        )
    }
}
ReactDOM.render(<Toggle /> ,document.getElementById('app'))