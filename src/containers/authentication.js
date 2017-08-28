import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';

export default function(Component) {
  class Authentication extends React.Component {

    componentDidMount() {
      this.props.checkAuth()
    }

    render() {
      return (
        <Component {...this.props}/>
      )
    }
  }

  function mapDispatchToProps(dispatch) {
    return ({
      checkAuth: () => {
        axios.get('/timeline').then((res) => {
          dispatch(actions.authenticateAction(res.data.username, res.data.id, res.data.twitterData))
        }).catch((error) => {
          console.log(error)
        })
      }
    })
  }

  Authentication.propTypes = {
    checkAuth: PropTypes.func
  }

  return connect(null, mapDispatchToProps)(Authentication)
}

