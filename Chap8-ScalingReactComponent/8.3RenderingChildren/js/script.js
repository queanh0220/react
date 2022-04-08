class Content extends React.Component {
  render() {
    console.log("Number of children: " + React.Children.count(this.props.children));
    return React.createElement(
      "div",
      null,
      this.props.children[0]
    );
  }
}
ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(
    Content,
    null,
    React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "p",
        null,
        "Child1"
      )
    ),
    React.createElement(
      "div",
      { className: "content" },
      React.createElement(
        "p",
        null,
        "Child2"
      )
    )
  )
), document.getElementById("content"));
