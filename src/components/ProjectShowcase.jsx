import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const ProjectShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Data Science & AI', 'Mobile Development'];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  // Handle ESC key press to close modal & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" style={{ background: 'var(--bg-editor)', padding: '6rem 0' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="vsc-comment"
          >
            {'// section: project showcase'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="kw">const </span>
            <span className="fn">featuredProjects</span>
            <span className="punct"> = </span>
            <span className="str">"Showcase"</span>
            <span className="punct">;</span>
          </motion.h2>
          <div className="vsc-divider" />
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.82rem',
                borderRadius: '4px',
                padding: '0.45rem 1.1rem',
              }}
            >
              {filter === cat ? '> ' : ''}{cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                className="vsc-panel"
                style={{
                  borderRadius: '6px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  position: 'relative',
                  borderTop: '2px solid var(--accent)',
                }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--syntax-cyan)' }}>
                    {project.category}
                  </span>
                  <span style={{
                    padding: '0.2rem 0.5rem',
                    background: 'var(--accent-dim)',
                    border: '1px solid var(--accent-border)',
                    borderRadius: '3px',
                    fontSize: '0.72rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: 'var(--accent)',
                  }}>
                    {project.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '0.75rem', fontFamily: 'Inter, sans-serif' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', flex: 1, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {project.summary}
                </p>

                <div style={{
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--syntax-orange)' }}>
                    ⚡ {project.metric}
                  </span>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent)' }}>
                    Details &rarr;
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Case Study */}
      <AnimatePresence>
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999, // Higher than Navbar (1000)
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              padding: '1.5rem',
              overflowY: 'auto',
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(6px)',
              }}
            />

            {/* Modal Box (VSCode Editor Window Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '850px',
                maxHeight: '88vh',
                background: 'var(--bg-sidebar)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                zIndex: 1,
                margin: 'auto',
              }}
            >
              {/* Modal Window Titlebar (VSCode Tab Bar Header) */}
              <div style={{
                background: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border)',
                padding: '0.6rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                flexShrink: 0,
                userSelect: 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--syntax-yellow)', fontSize: '0.85rem' }}>📄</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    projects/{selectedProject.id}.md
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  title="Close (Esc)"
                  style={{
                    background: 'var(--bg-hover)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    padding: '0.35rem 0.6rem',
                    gap: '0.3rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.78rem',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--syntax-red)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  <FiX size={16} /> Close
                </button>
              </div>

              {/* Scrollable Content */}
              <div style={{ padding: '2.5rem', overflowY: 'auto', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--syntax-cyan)', fontSize: '0.85rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    // {selectedProject.category}
                  </span>
                </div>

                <h2 style={{ fontSize: '2rem', color: 'var(--text-white)', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>
                  {selectedProject.title}
                </h2>

                {/* Metric Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--syntax-orange)',
                  borderRadius: '4px',
                  marginBottom: '2rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}>
                  <FiCheckCircle size={16} /> Metric: {selectedProject.metric}
                </div>

                {/* Description */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{
                    fontSize: '1.05rem',
                    marginBottom: '0.75rem',
                    color: 'var(--syntax-blue)',
                    fontFamily: 'JetBrains Mono, monospace',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <FiLayers /> ### Overview &amp; Architecture
                  </h4>
                  <p style={{
                    color: 'var(--text-primary)',
                    lineHeight: 1.8,
                    whiteSpace: 'pre-line',
                    fontSize: '0.95rem',
                    background: 'var(--bg-editor)',
                    padding: '1.25rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border)',
                  }}>
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{
                    fontSize: '1.05rem',
                    marginBottom: '0.75rem',
                    color: 'var(--syntax-blue)',
                    fontFamily: 'JetBrains Mono, monospace',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <FiCode /> ### Tech Stack
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {selectedProject.techStack.map(tech => (
                      <span
                        key={tech}
                        className="tag tag-cyan"
                        style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.88rem' }}
                    >
                      <FiGithub size={16} /> View Repository
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.88rem' }}
                    >
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Modal Footer Bar */}
              <div style={{
                background: 'var(--bg-surface)',
                borderTop: '1px solid var(--border)',
                padding: '0.4rem 1.2rem',
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                fontSize: '0.75rem',
                fontFamily: 'JetBrains Mono, monospace',
                color: 'var(--text-dim)',
                flexShrink: 0,
              }}>
                <span>Press ESC or click Outside/Close to exit</span>
                <span>ID: {selectedProject.id}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
