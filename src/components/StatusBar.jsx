import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const StatusBar = () => {
  const { theme, toggleTheme } = useTheme();

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    padding: '0 0.75rem',
    height: '100%',
    fontSize: '0.75rem',
    fontFamily: 'JetBrains Mono, monospace',
    color: 'rgba(255,255,255,0.9)',
    cursor: 'pointer',
    transition: 'background 0.15s ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    border: 'none',
    background: 'transparent',
  };

  const hoverIn = e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
  const hoverOut = e => e.currentTarget.style.background = 'transparent';

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '24px',
      background: 'var(--bg-statusbar)',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      zIndex: 2000,
      userSelect: 'none',
    }}>
      {/* Left side */}
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        {/* Branch indicator */}
        <div style={{ ...itemStyle, background: 'rgba(0,0,0,0.2)', cursor: 'default' }}>
          <span style={{ fontSize: '0.8rem' }}>⎇</span> main
        </div>
        <a
          href={personalInfo.github}
          target="_blank" rel="noreferrer"
          style={itemStyle}
          onMouseEnter={hoverIn} onMouseLeave={hoverOut}
        >
          <FiGithub size={11} /> GitHub
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank" rel="noreferrer"
          style={itemStyle}
          onMouseEnter={hoverIn} onMouseLeave={hoverOut}
        >
          <FiLinkedin size={11} /> LinkedIn
        </a>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <div style={{ ...itemStyle, cursor: 'default' }}>
          Carlos Qnova — portfolio.dev
        </div>

        {/* Encoding */}
        <div style={{ ...itemStyle, cursor: 'default' }}>
          UTF-8
        </div>

        {/* Language mode */}
        <div style={{ ...itemStyle, cursor: 'default' }}>
          TypeScript React
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
          style={{ ...itemStyle, cursor: 'pointer', gap: '0.4rem', border: 'none' }}
          onMouseEnter={hoverIn} onMouseLeave={hoverOut}
        >
          {theme === 'dark'
            ? <><FiSun size={11} /> Light+</>
            : <><FiMoon size={11} /> Dark+</>
          }
        </button>
      </div>
    </footer>
  );
};

export default StatusBar;
