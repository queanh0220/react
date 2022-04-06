let inputStyle = {color: "red"}

class StatesPrac extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Anh",
            info: {age: 22, hobby: "play game"}
        }
    }
    updateName() {
        this.setState({name: "Que Anh"});
    }
    
    render() { 
        return <div>
        <h1>Hi, I'm {this.state.name}, I like {this.state.info.hobby}</h1>
        <button onClick={() => this.updateName()}>Change Name</button>
        </div>
    }
}

const Helloworld = function(props) {
    return <h1>Hello {props.myName}</h1>
}

ReactDOM.render( 
        <div>
        <Helloworld myName="Abc"/>
        <StatesPrac/>
        </div>,
    document.getElementById('content')
)
