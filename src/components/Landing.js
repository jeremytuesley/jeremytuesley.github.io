import React, { useRef, useEffect } from 'react';

import '../assets/landing.scss';

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
        await anime(' MongoDB');
        await anime(' Express');
        await anime(' React JS');
        await anime(' Efficiency');
        await anime(' Node.js');
        await anime(' Sass/ CSS');
        await anime(' Apollo GQL');
        await anime(' Care');
        await anime(' Cypress');
        await anime(' Teamwork');
        await anime(' Git');
        await anime(' GitHub');
        await anime(' Cloudinary');
        await anime(' Heroku');
      }
    };
    if (textRef.current?.innerText === '') animeText();
  }, [textRef]);

  return (
    <div className="landing-page">
      <header>
        <h1 className="landing-name-title">Jeremy Tuesley</h1>
        <div className="landing-title">
          <h1>
            Front end software engineer who builds great web apps with
            <span className="anime" ref={textRef} />
            <span className="blink">|</span>
          </h1>
        </div>
        <div className="about-container">
          <p className="about-desc">
            A dedicated, objective driven, developer with a passion for
            delivering performant, responsive web applications with superb UI/
            UX.
          </p>
          <div className="social-icons">
            <div>GitHub</div>
            <div>Codepen</div>
            <div>LinkedIn</div>
            <div>Resume</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;
