import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/portfolioData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const skillCategories = [
  { label: 'Data Science & AI',   items: skills.dataScience,       tagClass: 'skill-tag-blue'   },
  { label: 'Web & Backend',       items: skills.webDevelopment,    tagClass: 'skill-tag-purple' },
  { label: 'Mobile Development',  items: skills.mobileDevelopment, tagClass: 'skill-tag-blue'   },
  { label: 'DevOps & Tools',      items: skills.toolsAndDevOps,    tagClass: 'skill-tag-muted'  },
];

const About = () => (
  <section id="about">
    <div className="container">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.span {...fadeUp()} className="section-eyebrow">About Me</motion.span>
        <motion.h2 {...fadeUp(0.1)} className="section-title">
          The Person Behind the Code
        </motion.h2>
        <div className="divider" />
      </div>

      {/* Two-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '3rem', alignItems: 'start' }}>

        {/* Left: Bio + Stats */}
        <motion.div {...fadeUp(0.15)}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '2.5rem' }}>
            {personalInfo.about}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {personalInfo.stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.2 + i * 0.07)}
                className="glass"
                style={{ padding: '1.4rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '1.8rem', fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-primary)',
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.03em',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Skills */}
        <motion.div
          {...fadeUp(0.25)}
          className="glass"
          style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}
        >
          <p style={{
            fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--color-text-dim)', marginBottom: '1.75rem',
          }}>
            Technical Skills
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            {skillCategories.map(({ label, items, tagClass }) => (
              <div key={label}>
                <h4 style={{
                  fontSize: '0.9rem', fontWeight: 600,
                  color: 'var(--color-text)', marginBottom: '0.7rem',
                }}>
                  {label}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {items.map((skill, i) => (
                    <span key={i} className={`skill-tag ${tagClass}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
