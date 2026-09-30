import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolioData';

const TimelineItem = ({ item, index, isEdu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: '2.5rem' }}
    >
      {/* Vertical timeline wire */}
      <div style={{
        position: 'absolute',
        left: '7px',
        top: '24px',
        bottom: 0,
        width: '1px',
        background: 'var(--border)',
      }} />

      {/* Timeline Node Icon */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '6px',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        background: isEdu ? 'var(--syntax-purple)' : 'var(--accent)',
        border: '3px solid var(--bg-sidebar)',
        boxShadow: `0 0 8px ${isEdu ? 'rgba(197, 134, 192, 0.4)' : 'rgba(0, 122, 204, 0.4)'}`,
      }} />

      {/* VSCode Panel Card */}
      <div className="vsc-panel" style={{ padding: '1.5rem', borderRadius: '6px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <div>
            <h4 style={{
              fontSize: '1.15rem',
              color: 'var(--text-white)',
              marginBottom: '0.2rem',
              fontFamily: 'Inter, sans-serif',
            }}>
              {item.role || item.degree}
            </h4>
            <div style={{
              fontSize: '0.88rem',
              fontFamily: 'JetBrains Mono, monospace',
              color: isEdu ? 'var(--syntax-purple)' : 'var(--syntax-cyan)',
            }}>
              @ {item.company || item.institution}
            </div>
          </div>

          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            padding: '0.25rem 0.65rem',
            background: 'var(--bg-editor)',
            border: '1px solid var(--border)',
            borderRadius: '3px',
            color: 'var(--text-dim)',
            whiteSpace: 'nowrap',
          }}>
            {item.period}
          </span>
        </div>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          lineHeight: 1.65,
        }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'var(--bg-sidebar)', padding: '6rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="vsc-comment"
          >
            {'// section: career & education timeline'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="kw">async function </span>
            <span className="fn">getExperience</span>
            <span className="punct">() {'{'}</span>
          </motion.h2>
          <div className="vsc-divider" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '3rem' }}>
          {/* Work Experience */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '1rem',
              color: 'var(--syntax-yellow)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span className="kw">const </span>
              <span className="var">workHistory</span>
              <span className="punct">: </span>
              <span className="type">Job[]</span>
            </div>
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem key={index} item={exp} index={index} isEdu={false} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '1rem',
              color: 'var(--syntax-yellow)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <span className="kw">const </span>
              <span className="var">educationHistory</span>
              <span className="punct">: </span>
              <span className="type">Academic[]</span>
            </div>
            <div>
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} index={index} isEdu={true} />
              ))}
            </div>
          </div>
        </div>

        {/* Closing brace */}
        <div style={{ textAlign: 'center', marginTop: '3rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
          <span className="punct">{'}'}</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
