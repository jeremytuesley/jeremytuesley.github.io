import React, { useRef, useEffect } from 'react';

import '../assets/landing.scss';
import codethinking from '../assets/images/code-thinking.svg';
import versioncontrol from '../assets/images/version-control.svg';
import resume from '../assets/images/Jeremy-Tuesley_Resume.pdf';

const Landing = () => {
  const textRef = useRef(null);

  // starts the animation flow
  useEffect(() => {
    // tell the javascript to wait, default 100ms
    const wait = (time = 100) =>
      new Promise((done) => setTimeout(() => done(), time));

    // the animation
    const anime = async (word) => {
      for (const i in word) {
        const index = parseInt(i) + 1;
        textRef.current.innerText = word.slice(0, index);
        await wait();
      }
      await wait(500);
      for (const i in word) {
        const index = word.length - parseInt(i) - 1;
        textRef.current.innerText = word.slice(0, index);
        await wait();
      }
      await wait(500);
    };

    // infinitely runs the animations
    const animeText = async () => {
      while (true) {
        await anime(' Javascript');
        await anime(' React JS');
        await anime(' Express');
        await anime(' Node.js');
        await anime(' Efficiency');
        await anime(' Care');
        await anime(' Teamwork');
        await anime(' Git');
      }
    };
    if (textRef.current?.innerText === '') animeText();
  }, [textRef]);

  return (
    <>
      <section className="landing-page">
        <header>
          <h1 className="landing-name-title">Jeremy Tuesley</h1>
          <div className="landing-title">
            <h2>
              Front end software engineer who builds great web apps with
              <span className="anime" ref={textRef} />
              <span className="blink">|</span>
            </h2>
          </div>
          <div className="about-container">
            <p className="about-desc">
              A dedicated, objective driven, developer with a passion for
              delivering performant, responsive web applications with superb UI/
              UX.
            </p>
            <div className="social-icons">
              <a
                href="https://www.github.com/jeremytuesley"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-github default-black"></i>
              </a>
              <a
                href="mailto:jeremytuesley@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <i class="far fa-envelope default-black"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jeremy-tuesley-46ab3619a/"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin-in linkedIn"></i>
              </a>
              <a href={resume} download>
                <i class="far fa-file-pdf resume"></i>
              </a>
            </div>
          </div>
        </header>
        <figure>
          <img
            className="landing-background--image"
            src={codethinking}
            alt="bg-decoration"
          />
        </figure>
      </section>
      <div className="landing-bottom">
        <img
          className="landing-bottom--image"
          src={versioncontrol}
          alt="bg-decoration"
        />
        <div className="landing-bottom--background" />
      </div>
    </>
  );
};

export default Landing;