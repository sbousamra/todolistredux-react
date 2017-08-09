import React from 'react';
import {connect} from 'react-redux';
import lodash from 'lodash';
import Signup from '../components/signup.js';
import {signupAction} from '../actions/actions.js';

function mapDispatchToProps(dispatch) {
  return ({
    dispatchSignup: () => {dispatch(signupAction)}
  })
}

export default connect(null, mapDispatchToProps)(Signup)