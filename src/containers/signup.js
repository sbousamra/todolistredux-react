import React from 'react';
import {connect} from 'react-redux';
import lodash from 'lodash';
import axios from 'axios';
import Signup from '../components/signup.js';
import {signupAction} from '../actions/actions.js';

function mapDispatchToProps(dispatch) {
  return ({
    dispatchSignup: (username, password) => {
      const newUser = {username: username, password: password}
      axios.post('/signup', newUser).then(() => {
        dispatch(signupAction)
      }).catch((error) => {console.log(error)})  
    }
  })
}

export default connect(null, mapDispatchToProps)(Signup)