import React from 'react';
// import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  // static propTypes = {
  //   authed: PropTypes.bool.isRequired,
  // }

  logIn = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <li>
        {
          authed ? (<button className="btn btn-danger logOutBtn" onClick={this.signOut}>Log Out</button>) : (<button className="btn btn-danger logInBtn" onClick={this.logIn}>Log In</button>)
        }
      </li>
    );
  }
}

export default Auth;
