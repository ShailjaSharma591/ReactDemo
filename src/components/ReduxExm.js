import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react/cjs/react.development';
import * as actionCreator from '../store/actions/actions';
import logo from '../../src/logo.svg';

class ReduxExm extends Component {

    render() {
        console.log(this.props.history);
        return (
            <div>
                <div className="age">
                    Your age: <span>{this.props.age}</span>
                </div>
                <button className="ageUp" onClick={this.props.onAgeUp}>Age UP</button>
                <button className="ageDown" onClick={this.props.onAgeDown}>Age Down</button>
                {this.props.loading && <img src="logo" className="App-logo" />}
                <hr />
                <div>History</div>
                <div>
                    <ul>
                        {
                            this.props.history.map(el => (
                                <li className="historyItem"
                                    key={el.id}
                                    onClick={() => this.props.onDelItem(el.id)}>
                                    {el.age}
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
        history: state.history,
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch(actionCreator.ageUp(1)),
        onAgeDown: () => dispatch(actionCreator.ageDown(1)),
        onDelItem: (id) => dispatch({ type: 'DELETE_ITEM', key: id }),
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxExm);