import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import Home from '../components/home.js';

function mapStateToProps(state) {
  return({
    loggedIn: state.login.loggedIn,
    username: state.login.username
  })
}

export default connect(mapStateToProps)(Home)