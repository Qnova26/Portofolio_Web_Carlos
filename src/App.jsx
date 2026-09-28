import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import Background3D from './components/Background3D';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Suspense fallback={<div style={{ color: 'white', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading 3D Engine...</div>}>
        <Background3D />
      </Suspense>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <ProjectShowcase />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
