import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Prompt } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import refExample from './refs/ref';
import proptypesExm from './proptypes';
import ButtonOne from './components/ButtonOne';
import ButtonTwo from './components/ButtonTwo';
import ReduxExm from './components/ReduxExm';
import MultipleReducer from './components/MultipleReducer';


const User = (params) => {
    return (<h1>Welcome User {params.username}</h1>)
}

class App extends Component {

    state = {
        loggedIn: false
    }
    loginhandle = () => {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))
    }


    render() {

        return (
            <Router>
                <div className="App">
                    {/* <ButtonOne disable />
                    <ButtonTwo disable /> */}
                    {/* <ul>
                        <li><NavLink exact to="/" activeStyle={{ color: 'green' }}>Home</NavLink></li>
                        <li><NavLink exact to="/about" activeStyle={{ color: 'green' }} >About</NavLink></li>
                        <li><NavLink exact to="/user:John" activeStyle={{ color: 'green' }}>User John</NavLink></li>
                        <li><NavLink exact to="/user:Peter" activeStyle={{ color: 'green' }}>User Peter</NavLink></li>
                        <li><NavLink exact to="/ref" activeStyle={{ color: 'green' }}>Ref Example</NavLink></li>
                    </ul> */}
                    <Prompt
                        when={!this.state.loggedIn}
                        message={(location) => {
                            return location.pathname.startsWith('/user') ? 'Are you sure' : true
                        }}

                    />
                    {/* <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginhandle.bind(this)} /> */}
                    <Route path="/" exact render={() => {
                        return (<h1>Welcome</h1>)
                    }} />
                    <Route path="/about" exact render={() => {
                        return (<h1>Welcome About</h1>)
                    }} />
                    <Route path="/about/" exact strict render={() => {
                        return (<h1>Welcome About</h1>)
                    }} />

                    <Route path="/user:username" exact strict component={User} />
                    <Route path="/ref" exact strict component={refExample} />
                    <Route path="/proptype" exact strict component={proptypesExm} />
                    <Route path="/react-redux" exact strict component={ReduxExm} />
                    <Route path="/MultipleReducer" exact strict component={MultipleReducer} />
                    <Route path="/user:username" exact strict render={({ match }) =>
                        (this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to='/' />))
                    } />
                </div>
            </Router>
        );
    }
}


export default App;