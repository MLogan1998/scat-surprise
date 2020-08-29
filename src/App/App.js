import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import authData from '../helpers/data/authData';
import connection from '../helpers/data/connection';

import NavBar from '../javascripts/components/pages/NavBar/NavBar';
import Home from '../javascripts/components/pages/Home/Home';
import EditBirb from '../javascripts/components/pages/EditBirb/EditBirb';
import NewBirb from '../javascripts/components/pages/NewBirb/NewBirb';
import SingleBirb from '../javascripts/components/pages/SingleBirb/SingleBirb';

import './App.scss';

connection();

class App extends React.Component {
  state ={
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        const uid = authData.getUid();
        return <div><Home uid={uid}/> <EditBirb uid={uid}/> <NewBirb uid={uid}/> <SingleBirb uid={uid}/></div>;
      }
      return '';
    };

    return (
      <div className="App">
        <NavBar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
