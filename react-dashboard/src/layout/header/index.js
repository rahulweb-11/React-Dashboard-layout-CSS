import React, { Component } from 'react';
import avatar from '../../assets/images/avatar.svg';
import './header.css';

export default class Header extends Component {

  render() {
    return (
        <nav className="navbar">
        <div className="nav_icon">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbar__left">
          <a className="active_link" href="#">Admin</a>
        </div>
        <div className="navbar__right">
          <a href="#">
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
          </a>
          <a href="#">
            <img width="30" src={avatar} alt="" />
          </a>
        </div>
      </nav>
    )
  }
}
