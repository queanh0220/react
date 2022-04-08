class Button extends React.Component {
  render() {
    return React.createElement(
      "button",
      null,
      this.props.label
    );
  }
}
Button.defaultProps = { label: "Button" };
ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Button, null),
  React.createElement(Button, { label: "Save" })
), document.getElementById("content"));
