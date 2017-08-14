import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import {syncHistoryWithStore, routerMiddleware, push} from 'react-router-redux';
import rootReducer from './reducers/rootReducer';
import Home from './containers/home';
import Signup from './containers/signup';

const middleware = applyMiddleware(logger, routerMiddleware(browserHistory))
const store = createStore(rootReducer, middleware)
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        <Route exact path="/" component={() => <Home/>}/>
        <Route path="/signup" component={() => <Signup/>}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)