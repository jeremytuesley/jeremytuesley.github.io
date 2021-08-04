/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import '../assets/skills.scss';

const Skills = () => {
  return (
    <div className="skills-page">
      <a name="skills" />
      <h1 className="skills-title">My Technology Stack</h1>
      <div className="skills-outer-container">
        <div>
          <h2 className="skills-content-title">Languages</h2>
          <div className="skills-content-container">
            <div className="skills">
              <i class="fab fa-html5"></i>
            </div>
            <div className="skills">
              <i class="fab fa-css3-alt"></i>
            </div>
            <div className="skills">
              <i class="fab fa-sass"></i>
            </div>
            <div className="skills">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt="JavaScriptLogo"
              />
            </div>
            <div className="skills">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
                alt="TypeScriptLogo"
              />
            </div>
            <div className="skills">
              <i class="fab fa-react"></i>
            </div>
            <div className="skills">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/ruby-3521683-2945127.png"
                alt="RubyLogo"
              />
            </div>
            <div className="skills">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/rails-3629008-3030233.png"
                alt="RailsLogo"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="skills-content-title">Other Tech</h2>
          <div className="skills-content-container">
            <div className="skills">Apollo GraphQL</div>
            <div className="skills">Axios</div>
            <div className="skills">Cypress</div>
            <div className="skills">Figma</div>
            <div className="skills">Git</div>
            <div className="skills">Heroku</div>
            <div className="skills">PostgreSQL</div>
            <div className="skills">Mongo DB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
