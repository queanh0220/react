
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
        return <div>
            <Click onClick={this.handleClick.bind(this)} />
            <ClickCount count={this.state.count} />
        </div>
    } 
}
class Click extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Click Me!</button>
    }
}
class ClickCount extends React.Component {
    render() {
        return <p>Clicked {this.props.count} {this.props.count == 1 ? "time":"times"}</p>
    }
}
ReactDOM.render( 
        <div>
        <HandleEventPrac/>
        </div>,
    document.getElementById('content')
)

