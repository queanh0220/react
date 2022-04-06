class LifecyclePrac extends React.Component {
    componentWillMount() {
        let a = document.getElementById("div1");
        console.log("before:" + a);
    }
    componentDidMount() {
        let a = document.getElementById("div1");
        console.log("after mount:" + a);
    }
    render() {
        return React.createElement(
            "div",
            { id: "div1" },
            React.createElement(
                "h1",
                null,
                "Hello there!"
            )
        );
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(LifecyclePrac, null)
), document.getElementById('content'));
