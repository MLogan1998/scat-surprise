/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import './NavBar.scss';

import Auth from '../Auth/Auth';

class NavBar extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    authed: PropTypes.bool,
  }

  signOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { authed } = this.props;
    const buildNavbar = () => {
      if (authed) {
        return (
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/new'>New Bird</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.signOut}>Sign Out</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav></Nav>;
    };

    return (
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#"><i class="fas fa-crow fa-2x"></i></a>
    //   <ul className = "ml-auto">
    //   <Auth authed={authed}/>
    //   </ul>
    //   </nav>
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">bird.watcher</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
         {buildNavbar()}
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavBar;
