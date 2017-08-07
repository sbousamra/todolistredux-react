import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import * as lodash from 'lodash';
import HomePage from './HomePage';
import SignupPage from './signupPage';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={(props) => <HomePage/>}/>
          <Route path="/signup" component={(props) => <SignupPage/>}/>
        </div>
      </Router>
    )
  }
}

export default App;