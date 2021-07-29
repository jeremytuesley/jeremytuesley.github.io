import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} exact />
        {/* <Footer /> */}
      </Switch>
    </main>
  );
}

export default App;
