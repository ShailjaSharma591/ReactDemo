import React, { Component } from 'react';
import './App.css';

class Hooks extends Component {

    constructor() {
        console.log('child constructor');
        super();
    }
    componentWillMount() {
        console.log('child componentWillMount');
    }
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps  ');
    }
    shouldComponentUpdate(nextprops, nextstate) {
        console.log('childshouldComponentUpdate');
        return true;
    }
    componentDidMount() {
        console.log('child componentDidMount');
    }
    componentWillMount() {
        console.log('child componentWillMount');
    }
    componentDidUpdate(prevprops, prevstate) {
        console.log('child componentDidUpdate');
        console.log('child prevpops', prevprops);
        console.log('child prevstate', prevstate);
    }
    componentWillUnmount() {
        console.log('child componentWillUnmount');
    }
    render() {
        console.log('render');
        return (
            <div className="App">
                Name:{this.props.name}
            </div>
        );
    }
}


export default Hooks;
