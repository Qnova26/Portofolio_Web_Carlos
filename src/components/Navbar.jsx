import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
        Porto<span style={{ color: 'var(--color-primary)' }}>Folio</span>.
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#hero" style={{ color: '#fff', fontWeight: 500 }}>Home</a>
        <a href="#about" style={{ color: '#fff', fontWeight: 500 }}>About</a>
        <a href="#experience" style={{ color: '#fff', fontWeight: 500 }}>Experience</a>
        <a href="#projects" style={{ color: '#fff', fontWeight: 500 }}>Work</a>
        
        <a href="/CV.pdf" download="My_CV.pdf" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          <FiDownload size={16} /> CV
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
