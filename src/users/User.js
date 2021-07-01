import React from 'react';

const User = (props) => {
    return <li>
        <span>Age : {props.age} Name: {props.children} </span>
        <button onClick={props.delEvent}>Delete</button>
        <input onChange={props.changeEvent} value={props.children} />
    </li>
    // return (<div>Age : {props.age} Name: {props.children} </div>)
}
export default User;