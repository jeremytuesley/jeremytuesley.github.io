/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Projects = () => {
  return (
    <div className="project-page">
      <a name="projects" />
      <h1 className="project-title">
        Some of my <span className="title-colour">Projects</span>
      </h1>
      <div className="project-card-container">
        <a
          href="link to project"
          rel="noreferrer"
          target="_blank"
          className="project-card"
        >
          <div className="project-cover">
            <figure className="project-image">
              <img src="https://picsum.photos/600/800" alt="project-name" />
            </figure>
            <h2 className="project-name">XLExtends</h2>
            <section className="project-details">
              <p></p>
              <div className="tech-container">
                <ul className="project-tech">
                  <h3 className="tech-title">Technologies Used</h3>
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
            </section>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
