import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const Footer = () => (
  <footer style={{
    borderTop: '1px solid rgba(255,255,255,0.05)',
    padding: '3rem 0',
    background: 'var(--color-surface)',
    position: 'relative',
    zIndex: 10,
  }}>
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem' }}>

      {/* Brand */}
      <div>
        <a href="#hero" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-text)', marginBottom: '0.5rem', display: 'inline-block' }}>
          Carlos<span style={{ color: 'var(--color-primary)' }}>.</span>
        </a>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '220px', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()} Carlos Qnova. All rights reserved.
        </p>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Links</h4>
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Contact */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h4 style={{ color: '#fff', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Connect</h4>
        {[
          { href: `mailto:${personalInfo.email}`, icon: <FiMail size={16} />,     label: 'Email' },
          { href: personalInfo.linkedin,           icon: <FiLinkedin size={16} />, label: 'LinkedIn' },
          { href: personalInfo.github,             icon: <FiGithub size={16} />,   label: 'GitHub' },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel={label !== 'Email' ? 'noreferrer' : undefined}
            style={{ color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            {icon} {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
