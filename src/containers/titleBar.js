import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import {loginAction} from '../actions/actions.js';
import TitleBar from '../components/titleBar.js';

function mapStateToProps(state) {
  console.log(state.login)
  return({
    loggedIn: state.loggedIn
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchLogin: (twitterData) => {dispatch(loginAction(twitterData))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)