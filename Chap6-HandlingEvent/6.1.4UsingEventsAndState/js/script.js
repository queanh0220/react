class HandleEventPrac extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleClick() {
        this.setState({ count: ++this.state.count });
    }
    render() {
        return React.createElement(
            "div",
            { id: "div1" },
            React.createElement(
                "button",
                { onClick: () => this.handleClick() },
                "You had clicked me ",
                this.state.count,
                " ",
                this.state.count === 1 ? "time" : "times"
            )
        );
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HandleEventPrac, null)
), document.getElementById('content'));
