import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import * as lodash from 'lodash';
import styles from '../../public/css/styles.css';
import TitleBar from './titleBar';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <TitleBar/>
        <div className="container-fluid twitterHomePageBackground">
        </div>
      </div>
    )
  }
}

export default App;