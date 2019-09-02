class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handlePlusOne= this.handlePlusOne.bind(this)
        this.handleMinusOne= this.handleMinusOne.bind(this)
        this.handleReset= this.handleReset.bind(this)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        const data = localStorage.getItem('num')
        if(data){
            const num = parseInt(data)
            if (!isNaN(data)){
                this.setState(()=>({ count:num }))
            }
        }

    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !==this.state.count){
            localStorage.setItem('num',this.state.count)
        }
    }
    handlePlusOne(){
        this.setState((pre)=>{
            return {
                count : pre.count+1
            }
            

        })

    }
    handleMinusOne(){
        this.setState((pre)=>{
            return {
                count : pre.count-1
            }
        })
            
    }
    handleReset(){
        this.setState(()=>{
            return {
                count: 0
            }
        })
    }
    
    render() {
        return(
            <div>
                <h1>count: {this.state.count} </h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            
            </div>
        )
    }
}

ReactDOM.render( <Counter /> ,document.getElementById('app'))