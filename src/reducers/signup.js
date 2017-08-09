import React from 'react';
import * as lodash from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP":
      console.log("Success")
      return state
    default:
      return state
  }
}