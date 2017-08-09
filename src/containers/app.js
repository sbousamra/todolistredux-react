import React from 'react';
import {connect} from 'react-redux';
import lodash from 'lodash';
import App from '../components/app.js';
import {loginAction} from '../actions/actions.js';

function mapStateToProps(state) {
  return({
    signedUp: state.signup.signedUp,
    loggedIn: state.login.loggedIn
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    getData: (twitterData) => {dispatch(loginAction(twitterData))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)