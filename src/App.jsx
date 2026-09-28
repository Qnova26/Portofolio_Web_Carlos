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
      <Suspense fallback={null}>
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
