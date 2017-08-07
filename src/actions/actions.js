import React from 'react';
import axios from 'axios';
import {createStore, combineReducers} from 'redux';
import * as lodash from 'lodash';

  export default (state = {}, action) => {
    console.log(state)
    switch (action.type) {
      case "ADD":
        return lodash.extend({}, state, {[action.text]: {completed: false}})
      case "TOGGLE":
        lodash.map(state, (content, todo) => {
          if (todo === action.text) {
            return {[todo]: !content.completed}
          } else {
            return todo
          }
        })
      default:
        return state
    }
  }
