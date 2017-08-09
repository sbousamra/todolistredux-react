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

  componentDidMount() {
    axios.get('/timeline').then((res) => {
      this.props.getData(res.data)
    }).catch((error) => {
      console.log(error)
    })  
  }

  render() {
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