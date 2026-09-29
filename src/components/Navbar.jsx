import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        zIndex: 1000,
        background: scrolled
          ? 'rgba(10, 10, 15, 0.92)'
          : 'rgba(10, 10, 15, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text)',
        }}
      >
        Carlos<span style={{ color: 'var(--color-primary)' }}>.</span>
      </a>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#fff'; }}
          >
            {label}
          </a>
        ))}

        <a
          href="/CV.pdf"
          download="CV_Carlos_Qnova.pdf"
          className="btn btn-outline"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          <FiDownload size={16} /> CV
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
