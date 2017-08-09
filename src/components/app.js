import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from '../containers/home';
import Signup from '../containers/signup'

class App extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData()
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