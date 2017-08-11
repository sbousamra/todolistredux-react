import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import axios from 'axios';
import Home from '../components/home.js';
import {loginAction} from '../actions/actions';

function mapStateToProps(state) {
  return({
    loggedIn: state.login.loggedIn,
    username: state.login.username
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)