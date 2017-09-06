import React from 'react';
import styles from '../public/css/styles.css';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store/configureStore';
import Home from './containers/home';
import Signup from './containers/signup';
import Authentication from './containers/authentication';
import DevTools from './containers/devTools';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const isProduction = process.env.NODE_ENV !== 'production'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <div>
        {isProduction ? <DevTools/> : null}
        <Route exact path="/" component={Authentication(Home)}/>
        <Route path="/signup" component={Authentication(Signup)}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)