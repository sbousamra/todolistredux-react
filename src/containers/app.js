import React from 'react';
import {connect} from 'react-redux';
import lodash from 'lodash';
import axios from 'axios';
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
    getData: () => {
      axios.get('/timeline').then((res) => {
        dispatch(loginAction(res.data))
      }).catch((error) => {
        console.log(error)
      })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)