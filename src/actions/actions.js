import axios from 'axios';
import {push} from 'react-router-redux';

export const signupAction = {
  type: "SIGNUP"
}

export const loginAction = (twitterData, username) => (
  {
    type: "LOGIN",
    username: username,
    twitterData: twitterData
  }
)

export const logoutAction = {
  type: "LOGOUT"
}

export function dispatchSignup(username, password) {
  return function(dispatch) {
    const newUser = {username: username, password: password}
    axios.post('/signup', newUser).then(() => {
      dispatch(signupAction)
      dispatch(push("/"))
    }).catch((error) => {console.log(error)})  
  }
}