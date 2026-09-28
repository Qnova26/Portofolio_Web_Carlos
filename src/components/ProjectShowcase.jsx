import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const catColors = {
  'Data Science & AI':  { bg: 'var(--color-primary-dim)',  color: 'var(--color-primary)', border: 'rgba(99,179,237,0.2)',  dot: '#63b3ed' },
  'Mobile Development': { bg: 'var(--color-accent-dim)',   color: 'var(--color-accent)',  border: 'rgba(246,173,85,0.2)',  dot: '#f6ad55' },
  'Web Development':    { bg: 'var(--color-purple-dim)',   color: 'var(--color-purple)',  border: 'rgba(183,148,244,0.2)', dot: '#b794f4' },
};

const ProjectCard = ({ project, onClick }) => {
  const c = catColors[project.category] || catColors['Data Science & AI'];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="glass"
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        borderTop: `2px solid ${c.dot}`,
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
      onClick={onClick}
      whileHover={{ y: -6, boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${c.dot}20` }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{
          padding: '0.22rem 0.7rem', borderRadius: 'var(--radius-full)',
          fontSize: '0.72rem', fontWeight: 600,
          background: c.bg, color: c.color, border: `1px solid ${c.border}`,
        }}>
          {project.category}
        </span>
        <span style={{
          padding: '0.22rem 0.65rem', borderRadius: 'var(--radius-full)',
          fontSize: '0.7rem', fontWeight: 500,
          background: 'rgba(255,255,255,0.04)', color: 'var(--color-text-muted)',
          border: '1px solid var(--color-border)',
        }}>
          {project.badge}
        </span>
      </div>

      <h3 style={{
        fontSize: '1.15rem', color: 'var(--color-text)',
        marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', lineHeight: 1.35,
      }}>
        {project.title}
      </h3>

      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
        {project.summary}
      </p>

      <div style={{
        marginTop: '1.5rem', paddingTop: '1.25rem',
        borderTop: '1px solid var(--color-border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: '0.8rem', color: c.color, fontWeight: 600 }}>{project.metric}</span>
        <span style={{
          fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: '0.3rem',
        }}>
          Case Study <FiArrowRight size={12} />
        </span>
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  const [filter, setFilter]   = useState('All');
  const [selected, setSelected] = useState(null);

  const categories = ['All', 'Data Science & AI', 'Mobile Development'];
  const filtered   = filter === 'All' ? projects : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects">
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-eyebrow"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-title"
          >
            Project Showcase
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="section-subtitle"
          >
            A selection of projects built with real-world impact in mind.
          </motion.span>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.5rem 1.3rem', fontSize: '0.88rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
          <AnimatePresence>
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (() => {
          const c = catColors[selected.category] || catColors['Data Science & AI'];
          return (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
              />
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass"
                style={{
                  position: 'relative', width: '100%', maxWidth: '760px',
                  maxHeight: '90vh', overflowY: 'auto',
                  borderRadius: 'var(--radius-xl)', padding: '3rem',
                  borderTop: `3px solid ${c.dot}`,
                }}
              >
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: 'absolute', top: '1.5rem', right: '1.5rem',
                    background: 'rgba(255,255,255,0.06)', border: '1px solid var(--color-border)',
                    color: 'var(--color-text-muted)', cursor: 'pointer',
                    width: '36px', height: '36px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                >
                  <FiX size={17} />
                </button>

                <span style={{
                  display: 'inline-block', padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)', fontSize: '0.76rem', fontWeight: 600,
                  background: c.bg, color: c.color, border: `1px solid ${c.border}`, marginBottom: '1rem',
                }}>
                  {selected.category}
                </span>

                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--color-text)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  {selected.title}
                </h2>

                <div style={{
                  display: 'inline-flex', padding: '0.3rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  background: c.bg, color: c.color, border: `1px solid ${c.border}`,
                  fontSize: '0.82rem', fontWeight: 600, marginBottom: '2rem',
                }}>
                  {selected.metric}
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-dim)', marginBottom: '0.75rem' }}>
                    Problem & Solution
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, whiteSpace: 'pre-line', fontSize: '0.93rem' }}>
                    {selected.description}
                  </p>
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-dim)', marginBottom: '0.75rem' }}>
                    Tech Stack
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {selected.techStack.map(tech => (
                      <span key={tech} className="skill-tag skill-tag-muted">{tech}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {selected.github && (
                    <a href={selected.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                      <FiGithub size={15} /> Repository
                    </a>
                  )}
                  {selected.demo && (
                    <a href={selected.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
