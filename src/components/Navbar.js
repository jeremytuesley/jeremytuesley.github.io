import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import '../assets/nav.scss';
import '../assets/animation.scss';
import hamburgerIcon from '../assets/images/hamburger.svg';
import resume from '../assets/images/Jeremy-Tuesley_Resume.pdf';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
      <React.Fragment>
        <Button onClick={toggleDrawer}>
          <img src={hamburgerIcon} alt="hamburger"></img>
        </Button>
        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
          <div className="hamburger__menu-item" style={{ paddingTop: '36px' }}>
            Skills
          </div>
          <div className="hamburger__menu-item">Resume</div>
          <div className="hamburger__menu-item">Projects</div>
          <div
            className="hamburger__menu-item"
            style={{ paddingBottom: '36px' }}
          >
            Contact
          </div>
        </Drawer>
      </React.Fragment>
      <ul className="nav__link--list underline-animation">
        <li className="nav__link">
          <a href="/#skills">Skills</a>
        </li>
        <li className="nav__link">
          <a href={resume} download>
            Resumé
          </a>
        </li>
        <li className="nav__link">
          <a href="/#projects">Projects</a>
        </li>
        <li className="nav__link contact-button">
          <a
            href="mailto:jeremytuesley@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
