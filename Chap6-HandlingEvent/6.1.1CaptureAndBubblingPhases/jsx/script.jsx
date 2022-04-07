class HandleEventPrac extends React.Component { 
    
    render() { 

        return <div id="div1"
        onMouseDownCapture={(e)=>{console.log("onMouseOverCapture div")} }
        onMouseDown={(e)=>{console.log("onMouseOver div")}}
            >
            <h1 id="1" 
            onMouseDownCapture={(e)=>{console.log("onMouseOverCapture h1")} }
            onMouseDown={(e)=>{console.log("onMouseOver h1")}}
            >Hello there!</h1>
        </div>
    }
}
ReactDOM.render( 
        <div>
        <HandleEventPrac/>
        </div>,
    document.getElementById('content')
)

 