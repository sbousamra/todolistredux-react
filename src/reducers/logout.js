import React from 'react';
import lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT":
      return lodash.extend({}, state, {loggedIn: false})
    default:
      return state
  }
}