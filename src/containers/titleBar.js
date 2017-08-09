import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import {loginAction} from '../actions/actions.js';
import TitleBar from '../components/titleBar.js';

function mapStateToProps(state) {
  return({
    loggedIn: state.loggedIn
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchLogin: (username, password) => {dispatch(loginAction(username, password))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)