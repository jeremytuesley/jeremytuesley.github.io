import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Landing />
        <Skills />
        <Projects />
        <Contact />
      </Route>
      {/* <Route path="/about" component={About} /> */}
    </Switch>
  );
};

export default Routes;
