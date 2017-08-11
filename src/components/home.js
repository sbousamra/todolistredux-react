import React from 'react';
import TitleBar from '../containers/titleBar';
import styles from '../../public/css/styles.css';

class Home extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    const trends = 
        <div className="card signedInTrends">
          <div className="card-block">
            <h4 className="card-title text-center">Trends</h4>
            <p className="text-center"> Daily trend... </p>
          </div>
        </div>

    const userCard = 
      <div className="col-3 signedInUserCard">
        <div className="card">
          <img className="card-img-top" src="https://steamuserimages-a.akamaihd.net/ugc/287476444271080327/40DC4BC571CBAB9CDC651920F35A0CE135393934/"/>
          <div className="card-block">
            <h4 className="card-title text-center">{this.props.username}</h4>
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
        {trends}
      </div>

    const tweets = 
      <div className="col-4 signedInUserTweets">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.username}</h4>
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

    if (this.props.loggedIn) {
      return(
        <div className="signedInBackground">
         <TitleBar/>
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
    } else {
      return(
        <div>
         <TitleBar/>
          <div className="container-fluid twitterHomePageBackground">
          </div>
        </div>
      )
    }
  }
}

export default Home;