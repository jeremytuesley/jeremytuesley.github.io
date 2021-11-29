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
        <li className="nav__link">
          <Link to="/about">About Me</Link>
        </li>
        <li className="nav__link">
          <a href="/#projects">Projects</a>
        </li>
        <li className="nav__link contact-button">
          <a
            href="mailto:jeremytuesley@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
