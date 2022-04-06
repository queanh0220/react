let inputStyle = { color: "red" };

class StatesPrac extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Anh",
            info: { age: 22, hobby: "play game" }
        };
    }
    updateName() {
        this.setState({ name: "Que Anh" });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hi, I'm ",
                this.state.name,
                ", I like ",
                this.state.info.hobby
            ),
            React.createElement(
                "button",
                { onClick: () => this.updateName() },
                "Change Name"
            )
        );
    }
}

const Helloworld = function (props) {
    return React.createElement(
        "h1",
        null,
        "Hello ",
        props.myName
    );
};

ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Helloworld, { myName: "Abc" }),
    React.createElement(StatesPrac, null)
), document.getElementById('content'));
