import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import StatusBar from './components/StatusBar';
import Background3D from './components/Background3D';

function App() {
  return (
    <ThemeProvider>
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

      <StatusBar />
    </ThemeProvider>
  );
}

export default App;
