class Form extends React.Component {
    constructor(props) {
      super(props);    
      this.state = { email: "" }
    }

    handleSubmit() {
        this.setState({email: ReactDOM.findDOMNode(this.refs.email).value})
    }
    
    render() {
      return (
        <div>
            <input type="email" ref="email" placeholder="email@gmail.com"/>
            <input type="submit"  value="Submit" onClick={this.handleSubmit.bind(this)}/>
            <p>{this.state.email}</p>
        </div>
      );
    }
  }

  ReactDOM.render(<Form/>, document.getElementById('content'));