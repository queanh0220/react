class HandleEventPrac extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            style: {display: "none"}
        }
        this.handleShowMess2 = this.handleShowMess.bind(this)
    }
    handleShowMess(e) {
        console.log(this, e);
        this.setState({style:{display:"block"}})
    }
    render() { 
        return <div id="div1">
            <h1 id="1" style={this.state.style}>Hello there!</h1>
            <button onClick={this.handleShowMess.bind(this)}>Say Hello 1</button>
            <button onClick={this.handleShowMess2}>Say Hello 2</button>
        </div>
    }
}
ReactDOM.render( 
        <div>
        <HandleEventPrac/>
        </div>,
    document.getElementById('content')
)

