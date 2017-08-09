import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import lodash from 'lodash';
import Home from '../containers/home';
import Signup from '../containers/signup'

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    console.log(this.props)
    return(
      <Router>
        <div>
          <Route exact path="/" component={() => <Home/>}/>
          <Route path="/signup" component={() => (
            this.props.signedUp ? (
              <Redirect to="/"/>
            ) : (
              <Signup/>
            )
          )}/>
        </div>
      </Router>
    )
  }
}

export default App;