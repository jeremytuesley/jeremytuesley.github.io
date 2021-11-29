import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
        <Skills />
        <Projects />
      </Route>
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
