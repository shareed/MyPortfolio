import React from 'react';

import './App.scss';

import Hero from './HeroArea/hero';
import NavTabs from './NavigationTabs/navTabs';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App bg-contact100">
    <div className = "row">
     <Hero />
     <NavTabs />
     <Footer />
    </div>
    </div>
  );
}

export default App;
