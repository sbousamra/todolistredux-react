import React from 'react';
import {connect} from 'react-redux';
import * as lodash from 'lodash';
import styles from '../../public/css/styles.css';
import TitleBar from './titleBar.js';

class SignupPage extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.trackUsername = this.trackUsername.bind(this)
    this.trackPassword = this.trackPassword.bind(this)
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

  render() {
    console.log(this.props)
    return(
      <div>
        <TitleBar/>
        <input onChange={this.trackUsername}/>
        <input onChange={this.trackPassword}/>
        <button onClick={this.props.dispatchSignup(this.state.username, this.state.password)}>Submit</button>
      </div>
    )
  }
}

export default SignupPage