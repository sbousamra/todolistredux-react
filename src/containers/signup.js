import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import {signupAction} from '../actions/actions.js';
import SignupPage from '../components/signupPage.js';

function mapStateToProps(state) {
  return({})
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchSignup: (username, password) => {dispatch(signupAction(username, password))}
  })
}

const Signup = connect(mapStateToProps, mapDispatchToProps)(SignupPage)
export default Signup