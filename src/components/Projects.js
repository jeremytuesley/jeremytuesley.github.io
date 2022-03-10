/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import '../assets/projects.scss';
import xlextends from '../assets/images/projects/xlextends.png';
import pcmart from '../assets/images/projects/pcmart.png';
import studyassistant from '../assets/images/projects/studyassistant.png';
import originalportfolio from '../assets/images/projects/originalportfolio.png';

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
          <div className="project-cover">
            <section className="project-details">
              <h2 className="project-name">XLExtends - Frontend</h2>
              <p className="project-tech">
                React, JavaScript, Sass, CSS, HTML{' '}
                <p className="tools">
                  Apollo GQL, Git, Cypress, MongoDB, Heroku,
                </p>
              </p>
              <p className="project-desc">
                MERN Stack shopfront website, with booking system, availability
                and online payment using stripe.
              </p>
              <div className="project-card__links-container">
                <a
                  href="https://xlextends-client.herokuapp.com"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fas fa-link" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/jeremytuesley/xlextends-client"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="project-card">
          <img src={pcmart} alt="pcmart-screenshot" className="bg-image" />
          <div className="project-cover">
            <section className="project-details">
              <h2 className="project-name">PC Mart - Full Stack</h2>
              <p className="project-tech">
                Ruby on Rails, Ruby, Sass, CSS, HTML, Js
                <p className="tools">PostgreSQL, Git, Devise, Heroku</p>
              </p>
              <p className="project-desc">
                Two-sided Marketplace web application, front-end and back-end
                built with Ruby on Rails.
              </p>
              <div className="project-card__links-container">
                <a
                  href="https://pc-mart.herokuapp.com"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fas fa-link" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/jeremytuesley/PC-Mart"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="project-card">
          <img
            src={studyassistant}
            alt="study-assistant-screenshot"
            className="bg-image"
          />
          <div className="project-cover">
            <section className="project-details">
              <h2 className="project-name">StudyAssistant</h2>
              <p className="project-tech">
                Ruby, Bash
                <p className="tools">Trello, Git</p>
              </p>
              <p className="project-desc">
                Ruby Terminal application, users input their own questions and
                answers. Made to assist with self-revision of questions and
                answers
              </p>
              <div className="project-card__links-container">
                <a
                  href="https://github.com/jeremytuesley/StudyAssistant"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fas fa-link" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/jeremytuesley/StudyAssistant"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className="project-card">
          <img
            src={originalportfolio}
            alt="originalportfolio-screenshot"
            className="bg-image"
          />
          <div className="project-cover">
            <section className="project-details">
              <h2 className="project-name">Original Portfolio</h2>
              <p className="project-tech">
                JavaScript, CSS, HTML
                <p className="tools">Git, GitHub Pages</p>
              </p>
              <p className="project-desc">
                Original developer portfolio, no libraries used, all css
                animations original code.
              </p>
              <div className="project-card__links-container">
                <a
                  href="https://github.com/jeremytuesley/First-Portfolio"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fas fa-link" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/jeremytuesley/First-Portfolio"
                  rel="noreferrer"
                  target="_blank"
                  className="card-button-link"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
