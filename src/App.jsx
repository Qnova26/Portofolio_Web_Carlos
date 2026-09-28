import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Background3D from './components/Background3D';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Suspense fallback={<div style={{ color: 'white' }}>Loading 3D Engine...</div>}>
        <Background3D />
      </Suspense>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}

export default App;
