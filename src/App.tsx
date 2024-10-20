import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Demo />
      <Packages />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;