import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, browserHistory} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import rootReducer from './reducers/rootReducer';
import Home from './containers/home';
import Signup from './containers/signup';

const store = createStore(rootReducer, applyMiddleware(logger))
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={() => <Home/>}/>
        <Route path="/signup" component={() => <Signup/>}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
)