import React, { useRef, useEffect } from 'react';

import '../assets/landing.scss';
import codethinking from '../assets/images/code-thinking.svg';

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
    <div className="landing-page">
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
            <i class="fab fa-github default-black"></i>
            <i class="far fa-envelope default-black"></i>
            <i class="fab fa-linkedin-in linkedIn"></i>
            <i class="far fa-file-pdf resume"></i>
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
    </div>
  );
};

export default Landing;
