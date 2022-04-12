import React from 'react'

export class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hash: window.location.hash}
        this.updateHash = this.updateHash.bind(this)
    }

    updateHash(event) {
        this.setState({hash: window.location.hash})
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.updateHash, false)
    }
 
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.updateHash, false)
    }
    render() {
        if(this.props.mapping[this.state.hash]){
            console.log(2);
            return this.props.mapping[this.state.hash]
        }  
        else {
            console.log(1);
            console.log(this.props.mapping['*']);
            return this.props.mapping['*']
        }
           
    }
}
 