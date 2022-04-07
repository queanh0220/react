class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", onChange: e => this.setState({ text: e.target.value }) }),
      React.createElement(
        "p",
        null,
        this.state.text
      )
    );
  }
}

ReactDOM.render(React.createElement(Form, null), document.getElementById('content'));
