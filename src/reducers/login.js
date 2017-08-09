import React from 'react';
import lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return lodash.extend({}, state, {twitterData: action.twitterData, loggedIn: true, username: action.username})
    default:
      return state
  }
}