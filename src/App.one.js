import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
import Hooks from './Hooks';
import Parent from './components/parentToChild/parent';

class App extends Component {

  constructor() {
    console.log('constructor');
    super();
    this.state = {
      title: "placeholder title"
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps  ');
  }
  shouldComponentUpdate(nextprops, nextstate) {
    console.log('shouldComponentUpdate  ');
    return true;
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate(prevprops, prevstate) {
    console.log('componentDidUpdate');
    console.log('prevpops', prevprops);
    console.log('prevstate', prevstate);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  changeTheWorld = (NewTitle) => {
    this.setState({ title: "lalala" });
  }

  render() {
    console.log('render');
    return (
      <div className="App">

        <Users />
        Parent Name:{this.state.title}
        <Hooks name={this.state.title} />
        <button onClick={this.changeTheWorld.bind(this)}>change</button>
        {/* <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')}
          keepTheSameName={this.changeTheWorld.bind(this, 'same name')}
          title={this.state.title} /> */}
      </div>
    );
  }
}


export default App;
