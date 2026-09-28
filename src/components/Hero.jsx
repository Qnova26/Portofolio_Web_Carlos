import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--color-primary)', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600, border: '1px solid rgba(0, 240, 255, 0.2)' }}>
            Welcome to my creative space
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.2, marginBottom: '1rem' }}
        >
          <span style={{ display: 'block', fontSize: '0.5em', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontWeight: 500 }}>Hello, I'm {personalInfo.name.split(' ')[0]}</span>
          Bridging <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-primary)' }}>Data Science</span> &<br />
          Full-Stack Engineering
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}
        >
          Building intelligent systems, multi-modal AI platforms, and responsive applications that convert complex data into actionable business insights.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects <FiArrowRight size={18} />
          </a>
          <a href="/CV.pdf" download="CV_Carlos_Qnova.pdf" className="btn btn-outline">
            Download CV
          </a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }}><FiGithub size={20} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }}><FiLinkedin size={20} /></a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }}><FiMail size={20} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
