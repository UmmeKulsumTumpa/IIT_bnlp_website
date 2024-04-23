import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Publications from './components/Publications';
import Team from './components/Meet_with_the_team';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Publications />
      <Team />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
