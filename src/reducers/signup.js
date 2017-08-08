import React from 'react';
import axios from 'axios';
import * as lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      if (action.username && action.password != "") {
        return lodash.extend({}, state, {[action.username]: {password: action.password}})
      } else {
        return state
      }
    default:
      return state
  }
}