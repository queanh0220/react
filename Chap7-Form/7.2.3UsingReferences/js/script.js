class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleSubmit() {
    this.setState({ email: ReactDOM.findDOMNode(this.refs.email).value });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "email", ref: "email", placeholder: "email@gmail.com" }),
      React.createElement("input", { type: "submit", value: "Submit", onClick: this.handleSubmit.bind(this) }),
      React.createElement(
        "p",
        null,
        this.state.email
      )
    );
  }
}

ReactDOM.render(React.createElement(Form, null), document.getElementById('content'));
