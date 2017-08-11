import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import rootReducer from './reducers/rootReducer';
import Home from './containers/home';
import Signup from './containers/signup';

const store = createStore(rootReducer, applyMiddleware(logger))
const history = syncHistoryWithStore(createBrowserHistory(), store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={() => <Home/>}/>
        <Route path="/signup" component={() => <Signup/>}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
)