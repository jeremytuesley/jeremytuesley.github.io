import React from 'React';
import { Link } from 'react-router-dom';

import '../assets/nav.scss';

const Navbar = () => {
  return (
    <>
      <div className="topnav">
        <Link to="/">
          <img src="" alt="mylogo"></img>
          <h1>Jeremy Tuesley</h1>
        </Link>
        <div>
          <Link to="/skills">Skills </Link>
          <Link to="/projects">Projects </Link>
          <Link to="/sales"> </Link>
          <Link to="/contact">Contact </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
