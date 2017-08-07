import React from 'react';
import axios from 'axios';
import * as lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      return lodash.extend({}, state, {username: action.username, password: action.password})
    default:
      return state
  }
}