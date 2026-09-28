import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0', marginTop: '4rem', background: 'var(--color-surface)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
            Porto<span style={{ color: 'var(--color-primary)' }}>Folio</span>.
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Links</h4>
            <a href="#hero" style={{ color: 'var(--color-text-muted)' }}>Home</a>
            <a href="#about" style={{ color: 'var(--color-text-muted)' }}>About</a>
            <a href="#experience" style={{ color: 'var(--color-text-muted)' }}>Experience</a>
            <a href="#projects" style={{ color: 'var(--color-text-muted)' }}>Work</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Contact</h4>
            <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--color-text-muted)' }}>Email</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)' }}>LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)' }}>GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
