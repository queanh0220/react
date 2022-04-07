
class Click extends React.Component {
    render() {
        return React.createElement(
            "button",
            { onClick: this.props.onClick },
            "You had clicked me ",
            this.props.count,
            " ",
            this.props.count === 1 ? "time" : "times"
        );
    }
}
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
        return React.createElement(Click, { onClick: () => this.handleClick(), count: this.state.count });
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HandleEventPrac, null)
), document.getElementById('content'));
