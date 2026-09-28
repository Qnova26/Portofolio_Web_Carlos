import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../data/portfolioData';

const typeBadge = {
  Work:       { bg: 'var(--color-primary-dim)',  color: 'var(--color-primary)', border: 'rgba(99,179,237,0.2)' },
  Program:    { bg: 'var(--color-accent-dim)',   color: 'var(--color-accent)',  border: 'rgba(246,173,85,0.2)' },
  Internship: { bg: 'var(--color-purple-dim)',   color: 'var(--color-purple)',  border: 'rgba(183,148,244,0.2)' },
};

const TimelineItem = ({ item, index, dotColor }) => {
  const badge = item.type ? typeBadge[item.type] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ position: 'relative', paddingLeft: '2.25rem', paddingBottom: '2.25rem' }}
    >
      {/* Line */}
      <div style={{
        position: 'absolute', left: '7px', top: '20px', bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)',
      }} />
      {/* Dot */}
      <div style={{
        position: 'absolute', left: 0, top: '10px',
        width: '15px', height: '15px', borderRadius: '50%',
        background: dotColor,
        border: `2px solid var(--color-bg)`,
        boxShadow: `0 0 12px ${dotColor}60`,
      }} />

      <div
        className="glass"
        style={{ padding: '1.5rem 1.75rem', borderRadius: 'var(--radius-md)' }}
      >
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem',
        }}>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.2rem' }}>
              {item.role || item.degree}
            </h3>
            <span style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              {item.company || item.institution}
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
            <span style={{
              padding: '0.2rem 0.65rem',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.76rem', color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
              fontWeight: 500, whiteSpace: 'nowrap',
            }}>
              {item.period}
            </span>
            {badge && (
              <span style={{
                padding: '0.18rem 0.65rem',
                background: badge.bg, color: badge.color,
                border: `1px solid ${badge.border}`,
                borderRadius: 'var(--radius-full)',
                fontSize: '0.72rem', fontWeight: 600, whiteSpace: 'nowrap',
              }}>
                {item.type}
              </span>
            )}
          </div>
        </div>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: '0.91rem' }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" style={{ background: 'rgba(13, 18, 32, 0.6)' }}>
    <div className="container">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.span
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="section-eyebrow"
        >
          My Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }} className="section-title"
        >
          Experience & Education
        </motion.h2>
        <div className="divider" />
      </div>

      {/* Columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>

        <div>
          <h3 style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--color-text-dim)',
            marginBottom: '2rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <span style={{ width: '28px', height: '1.5px', background: 'var(--color-primary)', display: 'inline-block' }} />
            Work History
          </h3>
          {experiences.map((exp, i) => (
            <TimelineItem key={i} item={exp} index={i} dotColor="var(--color-primary)" />
          ))}
        </div>

        <div>
          <h3 style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--color-text-dim)',
            marginBottom: '2rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <span style={{ width: '28px', height: '1.5px', background: 'var(--color-purple)', display: 'inline-block' }} />
            Education
          </h3>
          {education.map((edu, i) => (
            <TimelineItem key={i} item={edu} index={i} dotColor="var(--color-purple)" />
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Experience;
