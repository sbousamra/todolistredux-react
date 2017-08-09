import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import {signupAction} from '../actions/actions.js';
import Signup from '../components/signup.js';

function mapStateToProps(state) {
  return({})
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchSignup: (username, password) => {dispatch(signupAction(username, password))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)