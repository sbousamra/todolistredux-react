import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as lodash from 'lodash';
import styles from '../../public/css/styles.css';
import TitleBar from '../containers/titleBar.js';

class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.trackUsername = this.trackUsername.bind(this)
    this.trackPassword = this.trackPassword.bind(this)
    this.signupApiRequest = this.signupApiRequest.bind(this)
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

  signupApiRequest(username, password) {
    const newUser = {username: username, password: password}
    axios.post('/signup', newUser).then().catch((error) => {console.log(error)})  
  }

  render() {
    return(
      <div>
        <TitleBar/>
        <div className="container-fluid">
          <div className="row justify-content-md-center signupPageInputSpacing ">
            <h1 className="display-3 text-center signupPageHeader">Sign up now!</h1>
          </div>
          <div className="row justify-content-md-center signupPageInputSpacing">
            <div className="col-5">
              <div className="form-group">
              <input className="form-control mr-sm-2" type="text" placeholder="Username" onChange={this.trackUsername}/>
              <input className="form-control mr-sm-2" type="password" placeholder="Password" onChange={this.trackPassword}/>
              </div>
              <div className="text-center">
                <button className="btn btn-lg btn-success signupPageBtnSpacing" onClick={() => this.signupApiRequest(this.state.username, this.state.password)}>Submit</button>
              </div>               
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup