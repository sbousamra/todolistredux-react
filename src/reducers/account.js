import React from 'react';
import lodash from 'lodash';

function account(state = {}, action) {
  switch (action.type) {
    case "SIGNUP":
      return lodash.extend({}, state, {signedUp: true})
    case "LOGIN":
      return lodash.extend({}, state, {loggedIn: true, username: action.username})
    case "LOGOUT":
      return lodash.extend({}, state, {loggedIn: false})
    case "AUTHENTICATE":
      return lodash.extend({}, state, {loggedIn: true, username: action.username, id: action.id, twitterData: action.twitterData})      
    default:
      return state
  }
}

export default account;