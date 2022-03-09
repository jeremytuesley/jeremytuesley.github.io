import React from 'react';

import Routes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Routes />
      <Footer />
    </main>
  );
}

export default App;
