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

    const userCard = 
      <div className="col-3 signedInUserCard">
        <div className="card">
          <img className="card-img-top" src="https://i.stack.imgur.com/526Tw.jpg"/>
          <div className="card-block">
            <h4 className="card-title text-center">Bass</h4>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">Tweets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Following</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Followers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    const tweets = 
      <div className="col-4 signedInUserTweets">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Bass</h4>
            <p className="card-text">This is where the tweet content will go.</p>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">Reply</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Retweet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Like</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    const whoToFollow = 
      <div className="col-3 signedInWhoToFollow">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title text-center">Who to follow</h4>
          </div>
        </div>
      </div>

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
            <div className="col-1">
            </div>
             {userCard}
             {tweets}
             {whoToFollow}
            <div className="col-1">
            </div>
           </div>
        </div>
        </div>
      )
    }
  }
}

export default HomePage;