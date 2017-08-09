import React from 'react';
import * as lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return lodash.extend({}, state, {twitterData: action.twitterData, loggedIn: true})
    default:
      return state
  }
}