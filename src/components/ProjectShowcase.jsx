import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const ProjectShowcase = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Data Science & AI', 'Mobile Development'];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" style={{ padding: '8rem 0', position: 'relative' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Project Showcase
        </motion.h2>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.5rem 1.5rem', borderRadius: '50px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass"
                style={{ borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 240, 255, 0.15)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{project.category}</span>
                  <span style={{ padding: '0.2rem 0.6rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.75rem' }}>{project.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', flex: 1 }}>{project.summary}</p>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.85rem', color: '#b275ff', fontWeight: 600 }}>{project.metric}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
              className="glass"
              style={{ position: 'relative', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', borderRadius: '24px', padding: '3rem' }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <FiX size={24} />
              </button>

              <span style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600 }}>{selectedProject.category}</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{selectedProject.title}</h2>

              <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(138, 43, 226, 0.1)', color: '#b275ff', borderRadius: '8px', marginBottom: '2rem', fontWeight: 600 }}>
                Metric: {selectedProject.metric}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Problem Statement &amp; Solution</h4>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{selectedProject.description}</p>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Architecture / Tech Stack</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {selectedProject.techStack.map(tech => (
                    <span key={tech} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.9rem' }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiGithub /> View Repository
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
