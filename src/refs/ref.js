import React, { Component, Fragment } from 'react';

const FuncCustomComp = () => {
    let inputRef = null;

    const MyInput = (props) => {
        return (
            <input type="text"
                ref={props.inputRef}
            />
        )

    }

    const onClick = () => {
        inputRef.focus();
    }
    return (
        <Fragment>
            <div>
                <span>Func First Name:</span>
                <MyInput
                    inputRef={(input) => { inputRef = input }}
                />

            </div>
            <div>
                <input type="submit" value="submit"
                    onClick={onClick}
                />
            </div>
        </Fragment>
    )
}
class refExample extends Component {
    onClick = () => {
        alert(`hey: ${this.firstName.value} | ${this.lastName.value} submitted`);
        console.log(this.firstName.value)
    }
    onKeyUp = (target, e) => {

        if (e.keyCode === 13) {
            switch (target) {
                case 'firstName': this.lastName.focus();
                    break;
                case 'lastName': this.age.focus();
                    break;
                case 'age': this.submit.focus();
                    break;
                default:
                    this.firstName.focus();
            }

        }
    }
    render() {

        return (

            <Fragment>
                <FuncCustomComp />
                <div>
                    <span>First Name:</span>
                    <input type="text" ref={(input) => { this.firstName = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'firstName')} />
                </div>
                <div>
                    <span>Last Name:</span>
                    <input type="text" ref={(input) => { this.lastName = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'lastName')}
                    />
                </div>
                <div>
                    <span>Age:</span>
                    <input type="text" ref={(input) => { this.age = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'age')}
                    />
                </div>
                <div>
                    <input type="submit" value="submit"
                        ref={(input) => { this.submit = input }}
                        onKeyUp={this.onKeyUp.bind(this, 'submit')}
                        onClick={this.onClick}
                    />
                </div>
            </Fragment>
        )
    }
}
export default refExample;