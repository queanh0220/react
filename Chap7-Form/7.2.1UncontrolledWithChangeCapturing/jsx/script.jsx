class Form extends React.Component {
    constructor(props) {
      super(props);    
      this.state = { text: "" }
    }
    
    render() {
      return (
        <div>
            <input type="text" onChange={(e)=>this.setState({text:e.target.value})}/>
            <p>{this.state.text}</p>
        </div>
      );
    }
  }

  ReactDOM.render(<Form/>, document.getElementById('content'));