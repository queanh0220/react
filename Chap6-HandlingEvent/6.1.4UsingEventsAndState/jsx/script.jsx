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
      return <div id="div1">
          <button onClick={()=>this.handleClick()}>You had clicked me {this.state.count} {this.state.count === 1 ? "time" : "times"}</button>
      </div>
  } 
}
ReactDOM.render(  
      <div> 
      <HandleEventPrac/> 
      </div>,  
  document.getElementById('content') 
)