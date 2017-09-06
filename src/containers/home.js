import React from 'react';
import lodash from 'lodash';
import {connect} from 'react-redux';
import TitleBar from '../containers/titleBar';
import * as actions from '../actions/actions.js';
import PropTypes from 'prop-types';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      tweet: ""
    }
    this.trackTweet = this.trackTweet.bind(this)
  }

  trackTweet(e) {
    this.setState({
      tweet: e.target.value
    })
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

    const makeTweet = 
      <div className="card tweetCardSpacing">
        <div className="card-block">
          <input placeholder="What's happening?" className="form-control" onChange={this.trackTweet}/>
          <button className="btn btn-success tweetButton" onClick={() => this.props.dispatchSubmitTweet(this.props.username, this.state.tweet)}>Tweet</button>
        </div>
      </div>

    const tweets = 
      lodash.map(this.props.tweets, (tweet, id) => {
        return (
          <div key={id} className="card">
            <div className="card-block">
              <h4 className="card-title">{this.props.username}</h4>
              <p className="card-text">{tweet}</p>
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
        )
      })

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
                <div className="col-4 signedInUserTweets">
                  {makeTweet}
                  {tweets}
                </div>
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

function mapStateToProps(state) {
  return({
    loggedIn: state.account.loggedIn,
    username: state.account.username,
    tweets: state.account.tweets
  })
}

function mapDispatchToProps(dispatch) {
  return({
    dispatchSubmitTweet: (username, tweet) => dispatch(actions.dispatchSubmitTweet(username, tweet))
  })
}

Home.propTypes = {
  username: PropTypes.string,
  loggedIn: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

