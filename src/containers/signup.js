import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import styles from '../../public/css/styles.css';
import {signupAction} from '../actions/actions.js';

class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.trackUsername = this.trackUsername.bind(this)
    this.trackPassword = this.trackPassword.bind(this)
    this.dispatchSignup = this.dispatchSignup.bind(this)
  }

  trackUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  trackPassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  dispatchSignup() {
    this.props.dispatch(signupAction(this.state.username, this.state.password))
  }

  render() {
    return(
      <div>
        <input onChange={this.trackUsername}/>
        <input onChange={this.trackPassword}/>
        <button onClick={this.dispatchSignup}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

const SignupConnect = connect(mapStateToProps)(Signup)

export default SignupConnect