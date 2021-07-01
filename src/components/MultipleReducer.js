import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react/cjs/react.development';

class MultipleReducer extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="col">
                    <div><span>A:</span>{this.props.a}</div>
                    <button onClick={() => this.props.UpdateA(this.props.b)}>Update A</button>
                </div>
                <div className="col">
                    <div><span>B:</span>{this.props.b}</div>
                    <button onClick={() => this.props.UpdateB(this.props.a)}>Update B</button>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        a: state.rA.a,
        b: state.rB.b
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UpdateA: (b) => dispatch({ type: 'Update_A', b: b }),
        UpdateB: (a) => dispatch({ type: 'Update_B', a: a }),
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(MultipleReducer);