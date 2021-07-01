import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';



const Test = (props) => {
    return (
        <div>
            <h1>{props.str}</h1>
            <h1>{(props.bool) ? 'bool' : 'no'}</h1>
            <h1>{props.strOrNum}</h1>
            <div>
                {
                    props.ary.map((val) => {
                        return (<li key={val}>{val}</li>)
                    })
                }
            </div>
            <div>
                {
                    props.aryOfObject.map((val) => {
                        return (<li key={val.age}>{val.name}</li>)
                    })
                }
            </div>

        </div>
    )
}
Test.propTypes = {
    str: PropTypes.string,
    bool: PropTypes.bool,
    strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ary: PropTypes.arrayOf(PropTypes.number),
    aryOfObject: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string,
            age: PropTypes.number
        }
    ))

}
class proptypesExm extends Component {

    render() {

        return (
            <Test
                str={'Shailja'}
                bool
                strOrNum={10}
                ary={[1, 2, 3]}
                aryOfObject={[{ name: 'obj', age: 10 }, { name: 'asas', age: 34 }]}
            />
        )
    }
}
export default proptypesExm;