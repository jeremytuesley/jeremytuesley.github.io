import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/nav.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="topNav">
        <Link to="/">
          <div className="logoContainer">
            <div className="logoImage">
              <img src="" alt="mylogo"></img>
            </div>
            <h1>Jeremy Tuesley</h1>
          </div>
        </Link>
        <div>
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
