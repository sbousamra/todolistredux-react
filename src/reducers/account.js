import React from 'react';
import lodash from 'lodash';

function account(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return lodash.extend({}, state, {loggedIn: true, username: action.username})
    case "LOGOUT":
      return lodash.extend({}, state, {loggedIn: false})
    case "AUTHENTICATE":
      return lodash.extend({}, state, {loggedIn: true, username: action.username, id: action.id, tweets: action.tweets})
    case "SUBMITTWEET":
      return lodash.extend({}, state, {tweets: action.tweets})      
    default:
      return state
  }
}

export default account;