
class Click extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>You had clicked me {this.props.count} {this.props.count === 1 ? "time" : "times"}</button>
    }
}
class HandleEventPrac extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    handleClick() {
        this.setState({count: ++this.state.count})
    }
    render() { 
        return <Click onClick={()=>this.handleClick()} count={this.state.count} />
    } 
}
ReactDOM.render( 
        <div>
        <HandleEventPrac/>
        </div>,
    document.getElementById('content')
)

