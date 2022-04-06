class LifecyclePrac extends React.Component { 
    componentWillMount() {
        let a = document.getElementById("div1");
        console.log("before:"+a);
    }
    componentDidMount() {
        let a = document.getElementById("div1");
        console.log("after mount:"+a);
    }
    render() { 
        return <div id="div1">
        <h1>Hello there!</h1>
        </div>
    }
}
ReactDOM.render( 
        <div>
        <LifecyclePrac/>
        </div>,
    document.getElementById('content')
)
