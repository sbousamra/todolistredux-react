import React from 'react';
import {connect} from 'react-redux';
import lodash from 'lodash';
import axios from 'axios';
import {loginAction, logoutAction} from '../actions/actions.js';
import TitleBar from '../components/titleBar.js';

function mapStateToProps(state) {
  return({
    loggedIn: state.login.loggedIn
  })
}

function mapDispatchToProps(dispatch) {
  return ({
    dispatchLogin: (username, password) => {
      const newUser = {username: username, password: password}
      axios.post('/login', newUser).then((res) => {
        dispatch(loginAction(res.data))
      }).catch((error) => {
        console.log("Bad username and/or password")
      }) 
    },
    dispatchLogout: () => {
      axios.get('/logout').then(() => {
        dispatch(logoutAction)
      }).catch((error) => {
        console.log(error)
      })
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)