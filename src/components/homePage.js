import React from 'react';
import * as lodash from 'lodash';
import TitleBar from './titleBar';
import styles from '../../public/css/styles.css';

class HomePage extends React.Component {

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

export default HomePage;