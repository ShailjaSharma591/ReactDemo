import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './store/reducers/reducer';
import reducerA from './store/reducerA';
import reducerB from './store/reducerB';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB
});

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in the middleware ${JSON.stringify(result)}`);
      return result;
    }
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
