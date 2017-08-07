import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import * as lodash from 'lodash';
import Home from './home';
import Signup from '../containers/signup';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={(props) => <Home/>}/>
          <Route path="/signup" component={(props) => <Signup/>}/>
        </div>
      </Router>
    )
  }
}

export default App;