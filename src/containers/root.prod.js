import React from 'react';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from '../store/configureStore';
import Home from './home';
import Signup from './signup';
import Authentication from './authentication';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


class RootProd extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <div>
            <Route exact path="/" component={Authentication(Home)}/>
            <Route path="/signup" component={() => <Signup/>}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default RootProd