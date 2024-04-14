/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/images/logo.svg';
import resume from '../assets/images/Jeremy-Tuesley_Resume.pdf';

import '../assets/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer footer_content-container">
        <div className="footer_logo-anchor">
          <a href="#" className="logo-image">
            <img src={logo} alt="mylogo" />
            <span className="logo_top-popper">Back to Top &#8593;</span>
          </a>
        </div>
        <div className="footer_social-links underline-animation">
          <a
            href="https://github.com/jeremytuesley"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jeremy-tuesley/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jeremytuesley@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
          <a href={resume} download>
            Resume
          </a>
        </div>
        <div className="footer_copyright">
          Copyright &#169; 2024 Jeremy Tuesley
        </div>
      </div>
    </footer>
  );
};

export default Footer;
