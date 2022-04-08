class Content extends React.Component {
  render() {
    console.log("Number of children: "+React.Children.count(this.props.children))
    return <div>{this.props.children[0]}</div>;
  }
}
ReactDOM.render(
  <div>
    <Content>
      <div className="content">
        <p>Child1</p>
      </div>
      <div className="content">
        <p>Child2</p>
      </div>
    </Content>
  </div>,
  document.getElementById("content")
);