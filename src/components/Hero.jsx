import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

// Profile photo
let profilePhoto;
try {
  profilePhoto = new URL('../assets/profile.JPG', import.meta.url).href;
} catch { profilePhoto = null; }

// Line numbers helper
const Line = ({ num, children }) => (
  <div style={{ display: 'flex', gap: '0', minHeight: '1.6em' }}>
    <span style={{
      minWidth: '40px',
      paddingRight: '1.2rem',
      color: 'var(--line-number-text)',
      textAlign: 'right',
      fontSize: '0.82rem',
      fontFamily: 'JetBrains Mono, monospace',
      userSelect: 'none',
      flexShrink: 0,
    }}>{num}</span>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.88rem', lineHeight: 1.8 }}>
      {children}
    </span>
  </div>
);

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '3rem',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT: Code snippet ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* File path breadcrumb */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            color: 'var(--text-dim)',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}>
            <span>portfolio</span>
            <span>/</span>
            <span>src</span>
            <span>/</span>
            <span style={{ color: 'var(--syntax-yellow)' }}>home.tsx</span>
          </div>

          {/* Code block */}
          <div style={{
            background: 'var(--bg-sidebar)',
            border: `1px solid var(--border)`,
            borderTop: `2px solid var(--accent)`,
            borderRadius: '0 0 6px 6px',
            overflow: 'hidden',
          }}>
            {/* Tab */}
            <div style={{
              background: 'var(--bg-surface)',
              borderBottom: `1px solid var(--border)`,
              padding: '0.35rem 1.2rem',
              fontSize: '0.78rem',
              fontFamily: 'JetBrains Mono, monospace',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <span style={{ color: 'var(--syntax-blue)', fontSize: '0.7rem' }}>⚛</span>
              home.tsx
            </div>

            {/* Code content */}
            <div style={{ padding: '1.2rem 1rem 1.5rem' }}>
              <Line num={1}><span className="kw">const </span><span className="var">developer </span><span className="punct">= </span><span className="punct">{'{'}</span></Line>
              <Line num={2}>{'  '}<span className="prop">name</span><span className="punct">:  </span><span className="str">"{personalInfo.name}"</span><span className="punct">,</span></Line>
              <Line num={3}>{'  '}<span className="prop">role</span><span className="punct">:  </span><span className="str">"Data Scientist & Full-Stack Dev"</span><span className="punct">,</span></Line>
              <Line num={4}>{'  '}<span className="prop">base</span><span className="punct">:  </span><span className="str">"{personalInfo.location}"</span><span className="punct">,</span></Line>
              <Line num={5}>{'  '}<span className="prop">open</span><span className="punct">:  </span><span className="kw">true</span><span className="punct">,</span></Line>
              <Line num={6}><span className="punct">{'}'}</span><span className="punct">;</span></Line>
              <Line num={7}></Line>
              <Line num={8}><span className="comment">// Turning data into decisions,</span></Line>
              <Line num={9}><span className="comment">// and ideas into products.</span></Line>
              <Line num={10}></Line>
              <Line num={11}><span className="fn">export default </span><span className="type">developer</span><span className="punct">;</span></Line>
            </div>
          </div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight size={15} />
            </a>
            <a href="/CV.pdf" download="CV_Carlos_Qnova.pdf" className="btn btn-outline">
              <FiDownload size={15} /> Resume
            </a>
            <button
              onClick={copyEmail}
              className="btn btn-outline"
              style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem' }}
            >
              {copied ? '✓ Copied!' : personalInfo.email}
            </button>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', alignItems: 'center' }}
          >
            {[
              { href: personalInfo.github, icon: <FiGithub size={17} />, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: <FiMail size={17} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label} href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer" title={label}
                style={{
                  color: 'var(--text-secondary)', transition: 'color 0.2s',
                  display: 'flex', alignItems: 'center',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {icon}
              </a>
            ))}
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              // connect with me
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Accent corner frame */}
            <div style={{
              position: 'absolute',
              top: '-8px', left: '-8px',
              width: '40px', height: '40px',
              borderTop: `2px solid var(--accent)`,
              borderLeft: `2px solid var(--accent)`,
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-8px', right: '-8px',
              width: '40px', height: '40px',
              borderBottom: `2px solid var(--accent)`,
              borderRight: `2px solid var(--accent)`,
            }} />

            {/* Photo */}
            <div style={{
              width: '280px',
              height: '320px',
              overflow: 'hidden',
              border: `1px solid var(--border)`,
              position: 'relative',
              background: 'var(--bg-surface)',
            }}>
              <img
                src={profilePhoto || ''}
                alt="Carlos Qnova"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div style={{
                display: profilePhoto ? 'none' : 'flex',
                width: '100%', height: '100%',
                alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '0.5rem',
                background: 'var(--bg-surface)',
              }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '3.5rem', color: 'var(--syntax-blue)', fontWeight: 700 }}>CQ</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--text-dim)' }}>// profile.jpg</span>
              </div>
            </div>

            {/* Status badge */}
            <div style={{
              position: 'absolute',
              bottom: '-16px', left: '50%', transform: 'translateX(-50%)',
              background: 'var(--bg-surface)',
              border: `1px solid var(--border)`,
              borderLeft: `3px solid var(--syntax-green)`,
              padding: '0.3rem 0.9rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: 'var(--syntax-green)',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--syntax-green)',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              open_to_work = true
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {personalInfo.stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '1.5rem', fontWeight: 700,
              color: 'var(--syntax-blue)',
            }}>{s.value}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{s.label}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          #hero .container > div:first-child > div:last-child {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
