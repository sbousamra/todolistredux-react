import React from 'react';
import axios from 'axios';
import * as lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      const userAndPass = {username: action.username, password: action.password}
      return (
        axios.post('/login', userAndPass).then((res) => {
          lodash.extend({}, state, {twitterData: res.data, loggedIn: true})
        }).catch((error) => {
          console.log(error)
        })
      )
    default:
      return state
  }
}