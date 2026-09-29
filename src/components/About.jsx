import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/portfolioData';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay },
});

const skillGroups = [
  { label: 'dataScience',    title: 'data_science',    tagClass: 'tag-blue',   key: 'dataScience' },
  { label: 'webDevelopment', title: 'web_backend',     tagClass: 'tag-purple', key: 'webDevelopment' },
  { label: 'mobile',         title: 'mobile',          tagClass: 'tag-cyan',   key: 'mobileDevelopment' },
  { label: 'toolsAndDevOps', title: 'devops_tools',    tagClass: 'tag-muted',  key: 'toolsAndDevOps' },
];

const About = () => (
  <section id="about" style={{ background: 'var(--bg-sidebar)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
    <div className="container">

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.p {...fade()} className="vsc-comment">{'// section: about me'}</motion.p>
        <motion.h2 {...fade(0.1)} className="section-title">
          <span className="kw">function </span>
          <span className="fn">whoAmI</span>
          <span className="punct">() {'{'}</span>
        </motion.h2>
        <div className="vsc-divider" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '3rem', alignItems: 'start' }}>

        {/* LEFT: Bio */}
        <motion.div {...fade(0.15)}>
          {/* Return statement style bio */}
          <div style={{
            background: 'var(--bg-editor)',
            border: `1px solid var(--border)`,
            borderRadius: '4px',
            padding: '1.5rem',
            marginBottom: '2rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.85rem',
            lineHeight: 1.8,
          }}>
            <div style={{ color: 'var(--text-dim)', marginBottom: '0.5rem', fontSize: '0.78rem' }}>
              {'  '}<span style={{ color: 'var(--syntax-green)', fontStyle: 'italic' }}>/* about */</span>
            </div>
            <div>
              {'  '}<span style={{ color: 'var(--syntax-blue)' }}>return </span>
              <span style={{ color: 'var(--syntax-orange)' }}>
                `{personalInfo.about}`
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>;</span>
            </div>
          </div>

          {/* Stats as object properties */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
            marginBottom: '0.75rem',
          }}>
            <span style={{ color: 'var(--syntax-blue)' }}>const </span>
            <span style={{ color: 'var(--syntax-yellow)' }}>metrics</span>
            <span> = {'{'}</span>
          </div>
          <div style={{
            background: 'var(--bg-editor)',
            border: `1px solid var(--border)`,
            borderRadius: '4px',
            padding: '1.25rem 1.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
          }}>
            {personalInfo.stats.map((stat, i) => (
              <motion.div key={i} {...fade(0.2 + i * 0.07)}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '1.6rem', fontWeight: 700,
                  color: 'var(--syntax-blue)',
                  letterSpacing: '-0.03em',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)',
                  marginTop: '0.2rem',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
            {'}'}<span style={{ color: 'var(--text-secondary)' }}>;</span>
          </div>
        </motion.div>

        {/* RIGHT: Skills */}
        <motion.div {...fade(0.25)}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
            marginBottom: '0.75rem',
          }}>
            <span style={{ color: 'var(--syntax-blue)' }}>const </span>
            <span style={{ color: 'var(--syntax-yellow)' }}>skills</span>
            <span>: </span>
            <span style={{ color: 'var(--syntax-cyan)' }}>SkillSet</span>
            <span> = {'{'}</span>
          </div>

          <div style={{
            background: 'var(--bg-editor)',
            border: `1px solid var(--border)`,
            borderRadius: '4px',
            padding: '1.5rem',
          }}>
            {skillGroups.map(({ title, tagClass, key }, gi) => (
              <div key={key} style={{ marginBottom: gi < skillGroups.length - 1 ? '1.5rem' : 0 }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem',
                  marginBottom: '0.6rem',
                }}>
                  <span style={{ color: 'var(--syntax-blue)' }}>  {title}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>: [</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingLeft: '1.5rem', marginBottom: '0.4rem' }}>
                  {skills[key].map((s, i) => (
                    <span key={i} className={`tag ${tagClass}`}>{s}</span>
                  ))}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '0.5rem' }}>],</div>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>
            {'}'}<span style={{ color: 'var(--text-secondary)' }}>;</span>
          </div>
        </motion.div>
      </div>

      {/* Closing brace */}
      <motion.div {...fade(0.35)} style={{ textAlign: 'center', marginTop: '4rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
        <span className="punct">{'}'}</span>
      </motion.div>

    </div>
  </section>
);

export default About;
