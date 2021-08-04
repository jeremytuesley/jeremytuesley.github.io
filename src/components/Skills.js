/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import '../assets/skills.scss';

const Skills = () => {
  return (
    <div className="content">
      <div className="skills-page">
        <a name="skills" />
        <h1 className="skills-title">My Technology Stack</h1>
        <div className="skills-outer-container">
          <div>
            <h2 className="skills-content-title">Languages</h2>
            <div className="skills-content-container">
              <div className="skills">HTML</div>
              <div className="skills">CSS</div>
              <div className="skills">Sass</div>
              <div className="skills">JavaScript</div>
              <div className="skills">TypeScript</div>
              <div className="skills">React Js</div>
              <div className="skills">Ruby</div>
              <div className="skills">Ruby on Rails</div>
            </div>
          </div>
          <div className="skills-content-seperator" />
          <div>
            <h2 className="skills-content-title">Other Technologies</h2>
            <div className="skills-content-container">
              <div className="skills">Mongo DB</div>
              <div className="skills">Apollo GraphQL</div>
              <div className="skills">Cypress</div>
              <div className="skills">Cloudinary</div>
              <div className="skills">Heroku</div>
              <div className="skills">Figma</div>
              <div className="skills">PostgreSQL</div>
              <div className="skills">Git</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
