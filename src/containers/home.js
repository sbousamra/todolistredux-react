import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import {loginAction} from '../actions/actions.js';
import Home from '../components/home.js';

function mapStateToProps(state) {
  return({
    loggedIn: state.loggedIn
  })
}

export default connect(mapStateToProps)(Home)