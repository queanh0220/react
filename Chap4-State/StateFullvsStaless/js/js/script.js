class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.launchClock();
        this.state = {
            currentTime: new Date().toLocaleString()
        };
    }
    launchClock() {
        setInterval(() => {
            this.setState({ currentTime: new Date().toString() });
        }, 1000);
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(AnalogDisplay, { time: this.state.currentTime }),
            React.createElement(DigitalDisplay, { time: this.state.currentTime })
        );
    }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));
