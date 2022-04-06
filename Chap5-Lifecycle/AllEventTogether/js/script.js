class LifecyclePrac extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Anh" };
        console.log('constructor');
    }
    updateName() {
        setTimeout(() => {
            this.setState({ name: "Que Anh" });
        }, 2000);
    }
    componentWillMount() {
        console.log('componentWillMount');
        console.log(ReactDOM.findDOMNode(this));
    }
    componentDidMount(e) {
        console.log('componentDidMount');
        console.log(ReactDOM.findDOMNode(this));
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps');
        console.log('new props: ', newProps);
        this.updateName();
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
        return true;
    }
    componentWillUpdate(newProps, newState) {
        console.log('componentWillUpdate');
        console.log('new props: ', newProps);
        console.log('new state: ', newState);
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate');
        console.log('new props: ', oldProps);
        console.log('old props: ', oldState);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        // console.log('rendering... Display')
        return React.createElement(
            "h1",
            null,
            this.state.name,
            " ",
            this.props.time
        );
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toTimeString() };
        this.clock();
    }
    clock() {
        setTimeout(() => {
            this.setState({ time: new Date().toTimeString() });
        }, 1000);
    }
    render() {
        return React.createElement(LifecyclePrac, { time: this.state.time });
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Clock, null)
), document.getElementById('content'));
