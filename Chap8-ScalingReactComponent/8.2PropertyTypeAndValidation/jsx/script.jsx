class Button extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.email}</p>
        <button>{this.props.label}</button>
      </div>
    );
  }
}
Button.defaultProps = { label: "Button" };
Button.propTypes = {
  label: PropTypes.string,
  requireFunc: PropTypes.func.isRequired,
  email: function (props, propName, componentName) {
    var emailRegularExpression =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error("Email validation failed!");
    }
  },
};
let number = 1
ReactDOM.render(
  <div>
    <Button label={number} />
    <Button email="not valid email" />
    <Button label="Save" email="a@gmail.com" />
  </div>,
  document.getElementById("content")
);
