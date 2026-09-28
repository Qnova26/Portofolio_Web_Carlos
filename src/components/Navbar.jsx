import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          background: scrolled
            ? 'rgba(8, 12, 20, 0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255, 255, 255, 0.06)'
            : '1px solid transparent',
          transition: 'all 0.35s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: 'var(--color-text)',
            letterSpacing: '-0.03em',
          }}
        >
          Carlos<span style={{ color: 'var(--color-primary)' }}>.</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: active === href ? 600 : 400,
                color: active === href
                  ? 'var(--color-primary)'
                  : 'var(--color-text-muted)',
                background: active === href
                  ? 'var(--color-primary-dim)'
                  : 'transparent',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                if (active !== href) {
                  e.currentTarget.style.color = 'var(--color-text)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }
              }}
              onMouseLeave={e => {
                if (active !== href) {
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {label}
            </a>
          ))}

          <a
            href="/CV.pdf"
            download="CV_Carlos_Qnova.pdf"
            className="btn btn-primary"
            style={{ marginLeft: '0.75rem', padding: '0.5rem 1.2rem', fontSize: '0.88rem' }}
          >
            <FiDownload size={14} /> Resume
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
