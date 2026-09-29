import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const tabs = [
  { id: 'hero',       label: 'home.tsx',       icon: '⚛' },
  { id: 'about',      label: 'about.tsx',      icon: '👤' },
  { id: 'experience', label: 'experience.tsx', icon: '📋' },
  { id: 'projects',   label: 'projects.tsx',   icon: '🗂' },
  { id: 'contact',    label: 'contact.tsx',    icon: '📨' },
];

const Navbar = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Auto-detect active section
      const sections = tabs.map(t => document.getElementById(t.id));
      const current = sections.findLast(s => s && s.getBoundingClientRect().top <= 120);
      if (current) setActiveTab(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'var(--bg-sidebar)',
        borderBottom: `1px solid var(--border)`,
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Title bar row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.4rem 1.5rem',
        borderBottom: `1px solid var(--border)`,
        background: 'var(--bg-surface)',
        minHeight: '36px',
      }}>
        {/* App name */}
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          userSelect: 'none',
        }}>
          <span style={{ color: 'var(--syntax-blue)' }}>carlos</span>
          <span style={{ color: 'var(--text-dim)' }}> — </span>
          <span style={{ color: 'var(--text-secondary)' }}>portfolio.dev</span>
        </span>

        {/* Window dots */}
        <div style={{ display: 'flex', gap: '6px' }}>
          {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
            <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        overflowX: 'auto',
        background: 'var(--bg-surface)',
      }}>
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.55rem 1.2rem',
                fontSize: '0.82rem',
                fontFamily: 'JetBrains Mono, monospace',
                color: isActive ? 'var(--text-primary)' : 'var(--text-dim)',
                background: isActive ? 'var(--bg-editor)' : 'transparent',
                borderRight: `1px solid var(--border)`,
                borderBottom: isActive
                  ? `1px solid var(--bg-editor)`
                  : `1px solid transparent`,
                borderTop: isActive
                  ? `1px solid var(--accent)`
                  : `1px solid transparent`,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
                userSelect: 'none',
                marginBottom: isActive ? '-1px' : '0',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg-hover)'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{tab.icon}</span>
              {tab.label}
              {/* Dot indicator (unsaved changes aesthetic) */}
              {isActive && (
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: 'var(--accent)',
                  marginLeft: '0.2rem',
                  boxShadow: '0 0 4px var(--accent)',
                }} />
              )}
            </a>
          );
        })}
      </div>
    </motion.header>
  );
};

export default Navbar;
