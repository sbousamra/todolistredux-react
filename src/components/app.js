import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import * as lodash from 'lodash';
import Home from '../containers/home';
import Signup from '../containers/signup';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={(props) => <Home/>}/>
          <Route path="/signup" component={(props) => <Signup/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App;