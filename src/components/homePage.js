import React from 'react';
import * as lodash from 'lodash';
import TitleBar from './titleBar';
import styles from '../../public/css/styles.css';

class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      loggedIn: true
    }
  }

  render() {
    if (this.state.loggedIn === false) {
      return(
        <div>
         <TitleBar loggedIn={this.state.loggedIn}/>
          <div className="container-fluid twitterHomePageBackground">
          </div>
        </div>
      )
    } else {
      return(
        <div className="signedInBackground">
         <TitleBar loggedIn={this.state.loggedIn}/>
         <div className="container-fluid">
         <div className="row">
          <div className="col-3 signedInUserCard">
            <div className="card">
              <img className="card-img-top" src="https://i.stack.imgur.com/526Tw.jpg"/>
              <div className="card-block">
                <h4 className="card-title text-center">Bass</h4>
                <nav className="navbar navbar-toggleable-md">
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                      <li className="nav-item active"> 
                        <a className="nav-link" href="#">Tweets<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Following <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Followers</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-5 signedInUserTweets">
            <div className="card">
              <img className="card-img-top" src="https://i.stack.imgur.com/526Tw.jpg"/>
              <div className="card-block">
                <h4 className="card-title text-center">Bass</h4>
                <nav className="navbar navbar-toggleable-md">
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                      <li className="nav-item active"> 
                        <a className="nav-link" href="#">Tweets<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Following <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Followers</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
         </div>
        </div>
        </div>
      )
    }
  }
}

export default HomePage;