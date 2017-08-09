import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import App from './containers/app';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)