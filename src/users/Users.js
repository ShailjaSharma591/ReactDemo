import React, { Component } from 'react';
import UniqueId from 'react-html-id';
import User from './User';

class Users extends Component {

    constructor() {
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            users: [
                { id: this.nextUniqueId(), name: "John", age: 20 },
                { id: this.nextUniqueId(), name: "Jill", age: 30 },
                { id: this.nextUniqueId(), name: "peter", age: 40 },
            ],
            title: "UsersList",
            name: "shailja"
        }
    }

    makeMeYounger = () => {

        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age -= 10;
            return tempUser;
        });
        this.setState({
            newState
        });
    }
    changeNameFromInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    delUser = (index, e) => {
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({ users: users });
    }
    changeUserName = (id, e) => {
        const index = this.state.users.findIndex((ww) => {
            return ww.id === id
        })
        const user = Object.assign({}, this.state.users[index]);
        user.name = e.target.value;
        const users = Object.assign([], this.state.users);
        users[index] = user;
        this.setState({ users: users });

    }
    render() {
        return (<div>
            <button onClick={this.makeMeYounger}>Make Us 10 years younger</button>

            <br />
            <h1>{this.state.title}</h1>
            {
                this.state.users.map((user, index) => {
                    return <User delEvent={this.delUser.bind(this, index)}
                        changeEvent={this.changeUserName.bind(this, user.id)}
                        age={user.age}>
                        {user.name}
                    </User>
                })
            }
            <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />
            <div>{this.state.name}</div>
        </div>)
    }
}
export default Users;