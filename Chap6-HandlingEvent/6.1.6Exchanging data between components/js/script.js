
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
            null,
            React.createElement(Click, { onClick: this.handleClick.bind(this) }),
            React.createElement(ClickCount, { count: this.state.count })
        );
    }
}
class Click extends React.Component {
    render() {
        return React.createElement(
            "button",
            { onClick: this.props.onClick },
            "Click Me!"
        );
    }
}
class ClickCount extends React.Component {
    render() {
        return React.createElement(
            "p",
            null,
            "Clicked ",
            this.props.count,
            " ",
            this.props.count == 1 ? "time" : "times"
        );
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HandleEventPrac, null)
), document.getElementById('content'));
