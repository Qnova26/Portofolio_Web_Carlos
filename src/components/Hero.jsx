import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

// Try to import profile photo — falls back to initials gracefully
let profilePhoto;
try {
  profilePhoto = new URL('../assets/profile.jpg', import.meta.url).href;
} catch {
  profilePhoto = null;
}

const Hero = () => {
  const firstName = personalInfo.name.split(' ')[0];

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '7rem 0 4rem' }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Glow ring */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              background: 'conic-gradient(from 180deg, #00f0ff, #b275ff, #00f0ff)',
              opacity: 0.7,
              animation: 'spin-slow 8s linear infinite',
              filter: 'blur(2px)',
            }} />
            {/* Photo circle */}
            <div style={{
              position: 'relative',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--color-bg)',
              background: 'var(--color-surface)',
              flexShrink: 0,
            }}>
              <img
                src={profilePhoto || ''}
                alt={`${firstName} - Profile Photo`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  document.querySelector('.hero-initials').style.display = 'flex';
                }}
              />
              {/* Fallback initials */}
              <div
                className="hero-initials"
                style={{
                  display: profilePhoto ? 'none' : 'flex',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #13131c, #0a0a0f)',
                  fontSize: '4rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.04em',
                  textShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                }}
              >
                CQ
              </div>
            </div>

            {/* "Open to Work" badge */}
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '8px',
              background: 'rgba(19, 19, 28, 0.95)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '50px',
              padding: '0.3rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#00f0ff',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)',
            }}>
              <span style={{
                width: '7px', height: '7px',
                borderRadius: '50%',
                background: '#00f0ff',
                animation: 'pulse-dot 2s ease-in-out infinite',
                boxShadow: '0 0 6px #00f0ff',
              }} />
              Open to Work
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Text ── */}
        <div>
          {/* Greeting pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(0, 240, 255, 0.1)',
              color: 'var(--color-primary)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              border: '1px solid rgba(0, 240, 255, 0.2)',
            }}
          >
            👋 Hello, I'm {firstName}
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}
          >
            Bridging{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-primary)', filter: 'drop-shadow(0 0 8px var(--color-primary))' }}>
              Data Science
            </span>
            <br />
            &amp; Full-Stack Engineering
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '560px', marginBottom: '2.5rem', lineHeight: 1.8 }}
          >
            Building intelligent systems, multi-modal AI platforms, and responsive applications that convert complex data into actionable business insights.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight size={18} />
            </a>
            <a href="/CV.pdf" download="CV_Carlos_Qnova.pdf" className="btn btn-outline">
              Download CV
            </a>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: '0.25rem' }}>
              {[
                { href: personalInfo.github,            icon: <FiGithub size={20} />,   label: 'GitHub' },
                { href: personalInfo.linkedin,           icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: <FiMail size={20} />,     label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  title={label}
                  className="btn btn-outline"
                  style={{ padding: '0.75rem', borderRadius: '50%' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }
        @media (max-width: 768px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          #hero .container > div:last-child p {
            max-width: 100% !important;
          }
          #hero .container > div:last-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
