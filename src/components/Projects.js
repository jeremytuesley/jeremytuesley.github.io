/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import '../assets/projects.scss';
import xlextends from '../assets/images/projects/xlextends.png';

const Projects = () => {
  return (
    <section className="projects-page">
      <a name="projects" />
      <h1 className="project-page-title">
        Some of my <span className="title-colour">Projects</span>
      </h1>
      <div className="project-card-container">
        <div className="project-card">
          <img
            src={xlextends}
            alt="xlextends-screenshot"
            className="bg-image"
          />
          <h2 className="project-name">
            XLExtends
            <span className="project-name-desc"> - Shopfront Website </span>
          </h2>
          <section className="project-details">
            <p>
              MERN Stack Shopfront website, with booking system, availability,
              online payment.
            </p>
            <div className="tech-container">
              <ul className="project-tech">
                <h3 className="tech-title">Languages Used</h3>
                <li>React</li>
                <li>JavaScript</li>
                <li>Sass</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
              <ul className="project-tools">
                <h3 className="tech-title">Tools Used</h3>
                <li>Apollo GQL</li>
                <li>Git</li>
                <li>Cypress</li>
                <li>MongoDB</li>
                <li>Heroku</li>
              </ul>
            </div>
            <div className="project-card__links-container">
              <a
                href="https://xlextends-client.herokuapp.com"
                rel="noreferrer"
                target="_blank"
                className="card-button-link"
              >
                See Live
              </a>
              <a
                href="https://github.com/jeremytuesley/xlextends-client"
                rel="noreferrer"
                target="_blank"
                className="card-button-link"
              >
                See Source Code
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Projects;
