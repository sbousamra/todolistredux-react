import React from 'react';
import axios from 'axios';
import * as lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      if (action.username && action.password != "") {
        const newUser = {username: action.username, password: action.password}
        return (
          axios.post('/signup', newUser).then(state).catch((error) => {
            console.log("Error")
          })
        )
      } else {
        return state
      }
    default:
      return state
  }
}