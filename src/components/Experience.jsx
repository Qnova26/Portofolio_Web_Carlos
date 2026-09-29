import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolioData';

const TimelineItem = ({ item, index, dotColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: '3rem' }}
    >
      {/* Timeline line */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'rgba(255, 255, 255, 0.08)' }} />
      {/* Dot */}
      <div style={{
        position: 'absolute', left: '-6px', top: '6px',
        width: '14px', height: '14px', borderRadius: '50%',
        background: dotColor || 'var(--color-primary)',
        boxShadow: `0 0 10px ${dotColor || 'var(--color-primary)'}`,
      }} />

      <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.25rem' }}>{item.role || item.degree}</h3>
            <h4 style={{ fontSize: '1rem', color: dotColor || 'var(--color-primary)' }}>{item.company || item.institution}</h4>
          </div>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
            {item.period}
          </span>
        </div>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experience &amp; Education
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
          {/* Work History */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: '40px', height: '2px', background: 'var(--color-primary)', display: 'inline-block', boxShadow: '0 0 8px var(--color-primary)' }} />
              Work History
            </h3>
            <div style={{ position: 'relative' }}>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} index={index} dotColor="var(--color-primary)" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: '40px', height: '2px', background: '#b275ff', display: 'inline-block', boxShadow: '0 0 8px #b275ff' }} />
              Education
            </h3>
            <div style={{ position: 'relative' }}>
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} index={index} dotColor="#b275ff" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
