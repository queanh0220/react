class HandleEventPrac extends React.Component {

    render() {

        return React.createElement(
            "div",
            { id: "div1",
                onMouseDownCapture: e => {
                    console.log("onMouseOverCapture div");
                },
                onMouseDown: e => {
                    console.log("onMouseOver div");
                }
            },
            React.createElement(
                "h1",
                { id: "1",
                    onMouseDownCapture: e => {
                        console.log("onMouseOverCapture h1");
                    },
                    onMouseDown: e => {
                        console.log("onMouseOver h1");
                    }
                },
                "Hello there!"
            )
        );
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HandleEventPrac, null)
), document.getElementById('content'));
