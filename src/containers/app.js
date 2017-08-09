import React from 'react';
import {connect} from 'react-redux';
import lodash from 'lodash';
import App from '../components/app.js';

function mapStateToProps(state) {
  return({
    signedUp: state.signup.signedUp
  })
}

export default connect(mapStateToProps)(App)