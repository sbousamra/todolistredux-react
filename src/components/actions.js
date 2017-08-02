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
        return lodash.map(state, (content, todo) => {
            todo === action.text
            ? {[todo]: {completed: !todo.completed}}
            : todo 
          }
        )
      default:
        return state
    }
  }
