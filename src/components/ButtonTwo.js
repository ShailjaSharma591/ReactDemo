import React from 'react';
import styleWrapper from './../HOC/styleWrapper';

const ButtonTwo = (props) => {

    return (
        <button style={props.styles}>I am button</button>
    )
}
export default styleWrapper(ButtonTwo);