import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/nav.scss';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="top-nav">
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
        <div className="top-nav__right">
          Skills
          {/* <Link to="/skills">Skills </Link>
          <Link to="/projects">Projects </Link>
          <Link to="/blog"> Blog</Link>
          <Link to="/contact">Contact </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
