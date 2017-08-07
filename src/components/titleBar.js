import React from 'react';
import lodash from 'lodash';

class TitleBar extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.userSignup = this.userSignup.bind(this)
    this.userLogin = this.userLogin.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  } 

  userSignup() {
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.userSignup(newUser)
    this.setState({
      username: "",
      password: ""
    })
  }

  userLogin() {
    const existingUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.userLogin(existingUser)
    this.setState({
      username: "",
      password: ""
    })
  }

  handleUserInput(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSignup() {
    return (
      <a className="nav-link">
        <button type="button" className="btn btn-info" onClick={this.userSignup}>Sign Up</button>
      </a>
    )
  }

  handleLogout() {
    if (this.props.loggedin) {
      return (
        <a className="nav-link">
          <button className="btn btn-primary btn-info" onClick={this.props.userLogout}>Log Out</button>
        </a>
      )
    } else {
      return (
        <a className="nav-link">
          <button type="button" className="btn btn-info" onClick={this.userLogin}>Log In</button>
        </a>
      )
    }
  }

  render() {

    const boardsToLinks = lodash.map(this.props.boards, function(board, id) {
      return (
        <div key={id}>
          <a href={"/boards/" + id} className="dropdown-item">{board.name}</a>
        </div>
      )
    })

    const boardsDropdown =
      <div className="dropdown"> 
        <button className="btn btn-primary btn-outline-info dropdown-toggle" id="boardsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Boards
        </button>
        <div className="dropdown-menu" aria-labelledby="boardsDropdown">
          {boardsToLinks}
        </div>
      </div>

    if (this.props.loggedin) {
      return (
        <div className="container-fluid twitterTitleBarBackground">
          <nav className="navbar navbar-toggleable-md navbar-inverse twitterTitleBarBackground">
          <div className="col-1">
            {boardsDropdown}
          </div>
          <div className="col-4">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </div>
            <div className="col-4">
              <a href="/">
                <img src="https://cdn0.iconfinder.com/data/icons/twitter-ui-flat/48/Twitter_UI-01-128.png" className="img-fluid" alt="Responsive"/>
              </a>
            </div>
            <div className="col-md-auto">
              <ul className="navbar-nav">
                <a className="nav-link col-4"></a>
                <a className="nav-link" href="#"><button className="btn btn-info">+</button></a>
                {this.handleSignup()}
                {this.handleLogout()}
              </ul>
            </div>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="container-fluid">
          <nav className="navbar navbar-toggleable-md navbar-inverse twitterTitleBarBackground">
          <div className="col-5">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
          </div>
            <div className="col-4">
              <a href="/">
                <img src="http://yoganga.com/wp-content/uploads/2016/01/Twitter-Black.png" className="img-fluid twitterTitleBarLogo" alt="Responsive"/>
              </a>
            </div>
            <div className="col-md-auto">
              <ul className="navbar-nav">
                <a className="nav-link col-4"></a>
                <a className="nav-link" href="#"><button className="btn btn-info">+</button></a>
                {this.handleSignup()}
                {this.handleLogout()}
              </ul>
            </div>
          </nav>
        </div>
      )
    }
  }
}

export default TitleBar;
