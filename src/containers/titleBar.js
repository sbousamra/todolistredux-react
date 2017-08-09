import React from 'react';
import {connect} from 'react-redux';
import lodash from 'lodash';
import {loginAction} from '../actions/actions.js';
import TitleBar from '../components/titleBar.js';

function mapStateToProps(state) {
  return({
    loggedIn: state.login.loggedIn
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchLogin: (twitterData) => {dispatch(loginAction(twitterData))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)