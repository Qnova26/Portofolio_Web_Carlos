import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home',       href: '#hero' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

const socialLinks = [
  { href: `mailto:${personalInfo.email}`, icon: <FiMail size={16} />,     label: 'Email' },
  { href: personalInfo.linkedin,           icon: <FiLinkedin size={16} />, label: 'LinkedIn' },
  { href: personalInfo.github,             icon: <FiGithub size={16} />,   label: 'GitHub' },
];

const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--color-border)',
    padding: '3.5rem 0 2rem',
    background: 'var(--color-bg-2)',
    position: 'relative',
    zIndex: 10,
  }}>
    <div className="container">

      <div style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'flex-start',
        gap: '2.5rem', marginBottom: '3rem',
      }}>

        {/* Brand */}
        <div style={{ maxWidth: '240px' }}>
          <a href="#hero" style={{
            fontFamily: 'var(--font-heading)', fontSize: '1.5rem',
            fontWeight: 800, color: 'var(--color-text)',
            display: 'inline-block', marginBottom: '0.75rem',
            letterSpacing: '-0.03em',
          }}>
            Carlos<span style={{ color: 'var(--color-primary)' }}>.</span>
          </a>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
            Data Scientist & Full-Stack Developer based in Bali, Indonesia.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{
            fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-dim)',
            textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem',
          }}>
            Navigation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {navLinks.map(({ label, href }) => (
              <a
                key={href} href={href}
                style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', fontWeight: 400, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 style={{
            fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-dim)',
            textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem',
          }}>
            Connect
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label} href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  color: 'var(--color-text-muted)', fontSize: '0.88rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '1.5rem',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem',
      }}>
        <p style={{ color: 'var(--color-text-dim)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Carlos Qnova. All rights reserved.
        </p>
        <p style={{
          color: 'var(--color-text-dim)', fontSize: '0.82rem',
          display: 'flex', alignItems: 'center', gap: '0.35rem',
        }}>
          Built with <FiHeart size={12} style={{ color: 'var(--color-primary)' }} /> React & Framer Motion
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;
