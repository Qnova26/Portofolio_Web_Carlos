import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolioData';

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ position: 'relative', paddingLeft: '3rem', paddingBottom: '3rem' }}
    >
      {/* Timeline Line & Dot */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
      <div style={{ position: 'absolute', left: '-6px', top: '6px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }}></div>
      
      <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.25rem' }}>{item.role || item.degree}</h3>
            <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)' }}>{item.company || item.institution}</h4>
          </div>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            {item.period}
          </span>
        </div>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="container" style={{ padding: '8rem 2rem' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Experience & Education
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
        {/* Experience Column */}
        <div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: '40px', height: '2px', background: 'var(--color-primary)' }}></span>
            Work History
          </h3>
          <div style={{ position: 'relative' }}>
            {experiences.map((exp, index) => (
              <TimelineItem key={index} item={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: '40px', height: '2px', background: '#b275ff' }}></span>
            Education
          </h3>
          <div style={{ position: 'relative' }}>
            {education.map((edu, index) => (
              <TimelineItem key={index} item={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
