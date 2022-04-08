class Button extends React.Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}
Button.defaultProps = {label: "Button"}
ReactDOM.render(
  <div>
    <Button />
    <Button label="Save"/>
  </div>,
  document.getElementById("content")
);