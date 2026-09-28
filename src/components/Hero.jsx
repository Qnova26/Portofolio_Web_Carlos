import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

// Try to import photo — fallback handled gracefully
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
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '7rem 0 4rem',
      }}
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
              inset: '-4px',
              borderRadius: '50%',
              background: 'conic-gradient(from 180deg, var(--color-primary), var(--color-purple), var(--color-primary))',
              opacity: 0.6,
              animation: 'spin-slow 8s linear infinite',
              filter: 'blur(2px)',
            }} />
            {/* Photo frame */}
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
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt={`${firstName} - Profile Photo`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  onError={(e) => {
                    // Fallback to initials if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.querySelector('.initials-fallback').style.display = 'flex';
                  }}
                />
              ) : null}

              {/* Initials fallback */}
              <div
                className="initials-fallback"
                style={{
                  display: profilePhoto ? 'none' : 'flex',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, var(--color-surface-2), var(--color-bg-2))',
                  fontSize: '4rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  color: 'var(--color-primary)',
                  letterSpacing: '-0.04em',
                }}
              >
                CQ
              </div>
            </div>

            {/* Status badge */}
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '8px',
              background: 'var(--color-surface)',
              border: '2px solid var(--color-bg)',
              borderRadius: 'var(--radius-full)',
              padding: '0.3rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--color-green)',
              boxShadow: 'var(--shadow-md)',
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--color-green)',
                animation: 'pulse-dot 2s ease-in-out infinite',
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1rem',
              background: 'var(--color-primary-dim)',
              border: '1px solid rgba(99, 179, 237, 0.2)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginBottom: '1.5rem',
            }}
          >
            <span>👋</span> Hello, I'm {firstName}
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{
              background: 'linear-gradient(135deg, #f0f4f8 0%, #63b3ed 50%, #b794f4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Data Scientist
            </span>
            <br />
            <span style={{ color: 'var(--color-text)', fontWeight: 700 }}>
              & Full-Stack
            </span>
            <br />
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, fontSize: '0.65em' }}>
              Developer
            </span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.05rem',
              maxWidth: '520px',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            Building <strong style={{ color: 'var(--color-primary)', fontWeight: 600 }}>intelligent systems</strong> and responsive applications from Bali, Indonesia — turning complex data into actionable business insights.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
          >
            <a href="#projects" className="btn btn-primary" style={{ padding: '0.8rem 1.8rem' }}>
              View My Work <FiArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn-outline" style={{ padding: '0.8rem 1.8rem' }}>
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            style={{ display: 'flex', gap: '0.6rem' }}
          >
            {[
              { href: personalInfo.github,            icon: <FiGithub size={17} />,   label: 'GitHub' },
              { href: personalInfo.linkedin,           icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: <FiMail size={17} />,     label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                title={label}
                className="btn btn-outline"
                style={{ padding: '0.6rem', borderRadius: '50%', width: '40px', height: '40px' }}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        <span style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          scroll
        </span>
        <div style={{
          width: '22px', height: '34px',
          border: '1.5px solid rgba(255,255,255,0.12)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          padding: '4px 0',
        }}>
          <div style={{
            width: '3px', height: '8px',
            background: 'var(--color-primary)',
            borderRadius: '2px',
            animation: 'scroll-dot 2s ease-in-out infinite',
          }} />
        </div>
      </motion.div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.8); }
        }
        @keyframes scroll-dot {
          0%   { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }

        @media (max-width: 768px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          #hero .container > div:first-child {
            display: flex;
            justify-content: center;
          }
          #hero .container > div:last-child > div[style*="flex"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
