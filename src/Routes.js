import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
        <Skills />
        <Projects />
      </Route>
    </Switch>
  );
};

export default Routes;
