class HandleEventPrac extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: { display: "none" }
        };
        this.handleShowMess2 = this.handleShowMess.bind(this);
    }
    handleShowMess(e) {
        console.log(this, e);
        this.setState({ style: { display: "block" } });
    }
    render() {
        return React.createElement(
            "div",
            { id: "div1" },
            React.createElement(
                "h1",
                { id: "1", style: this.state.style },
                "Hello there!"
            ),
            React.createElement(
                "button",
                { onClick: this.handleShowMess.bind(this) },
                "Say Hello 1"
            ),
            React.createElement(
                "button",
                { onClick: this.handleShowMess2 },
                "Say Hello 2"
            )
        );
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HandleEventPrac, null)
), document.getElementById('content'));
