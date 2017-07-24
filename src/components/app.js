import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div>
        <h1>First Page let's go!</h1>
      </div>
    )
  }
}

export default App;