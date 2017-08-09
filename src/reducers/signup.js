import React from 'react';
import lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      return lodash.extend({}, state, {signedUp: true})
    default:
      return state
  }
}