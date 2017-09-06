import axios from 'axios';
import {push} from 'react-router-redux';

export const signupAction = {
  type: "SIGNUP"
}

export const loginAction = (username) => (
  {
    type: "LOGIN",
    username: username
  }
)

export const logoutAction = {
  type: "LOGOUT"
}

export const authenticateAction = (username, id, twitterData) => (
  {
    type: "AUTHENTICATE",
    username: username,
    id: id,
    twitterData: twitterData
  }
)

export function dispatchSignup(username, password) {
  return function(dispatch) {
    const newUser = {username: username, password: password}
    axios.post('/signup', newUser).then(() => {
      return dispatch(signupAction)
    }).then(() => {
      return dispatch(push('/'))
    }).catch((error) => {console.log(error)})  
  }
}