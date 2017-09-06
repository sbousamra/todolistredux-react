import axios from 'axios';
import {push} from 'react-router-redux';


export const loginAction = (username) => (
  {
    type: "LOGIN",
    username: username
  }
)

export const logoutAction = {
  type: "LOGOUT"
}

export const submitTweetAction = (tweets) => (
  {
    type: "SUBMITTWEET",
    tweets: tweets
  }
)

export const authenticateAction = (username, id, tweets) => (
  {
    type: "AUTHENTICATE",
    username: username,
    id: id,
    tweets: tweets
  }
)

export function dispatchSignup(username, password) {
  return function(dispatch) {
    const newUser = {username: username, password: password}
    axios.post('/signup', newUser).then(() => {
      return dispatch(push('/'))
    }).catch((error) => {console.log(error)})  
  }
}

export function dispatchSubmitTweet(username, tweet) {
  return function(dispatch) {
    axios.post('/tweets', {username: username, tweet: tweet}).then((res) => {
      return dispatch(submitTweetAction(res.data.tweets))
    })
  }
}