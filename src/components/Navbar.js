import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/nav.scss';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="nav--logo">
        <Link to="/">
          <div className="logo-container">
            <div className="logo-image">
              <img src={logo} alt="mylogo"></img>
            </div>
            <div className="logo-titles">
              <h1>Jeremy Tuesley</h1>
              <h2>Front End Software Engineer</h2>
            </div>
          </div>
        </Link>
      </div>
      <ul className="nav__link--list">
        <li className="nav__link">
          <a href="/#skills">Skills</a>
        </li>
        <li className="nav__link">About Me</li>
        <li className="nav__link">Projects</li>
        <li className="nav__link contact-button">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
