class Button extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        this.props.email
      ),
      React.createElement(
        "button",
        null,
        this.props.label
      )
    );
  }
}
Button.defaultProps = { label: "Button" };
Button.propTypes = {
  label: PropTypes.string,
  requireFunc: PropTypes.func.isRequired,
  email: function (props, propName, componentName) {
    var emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error("Email validation failed!");
    }
  }
};
let number = 1;
ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Button, { label: number }),
  React.createElement(Button, { email: "not valid email" }),
  React.createElement(Button, { label: "Save", email: "a@gmail.com" })
), document.getElementById("content"));
