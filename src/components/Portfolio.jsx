import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Neon E-Commerce',
    description: 'A modern, dark-themed e-commerce platform built with React and Stripe. Features interactive 3D product previews.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Three.js', 'Stripe', 'Node.js'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Cyberpunk Dashboard',
    description: 'Data visualization dashboard with real-time analytics. Styled with sleek neon glassmorphism aesthetics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Vite', 'Framer Motion', 'Chart.js'],
    demo: '#',
    github: '#'
  },
  {
    title: '3D Portfolio Template',
    description: 'An open-source portfolio template showcasing the power of React Three Fiber for immersive web experiences.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tags: ['React Three Fiber', 'Tailwind CSS'],
    demo: '#',
    github: '#'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="container" style={{ padding: '8rem 2rem' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Featured Work
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem', marginTop: '4rem' }}>
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass"
            style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} 
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--color-surface), transparent)' }}></div>
            </div>
            
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{project.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ padding: '0.25rem 0.75rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--color-primary)', fontSize: '0.8rem', borderRadius: '50px', border: '1px solid rgba(0,240,255,0.2)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.demo} className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}>
                  <FiExternalLink size={18} /> Demo
                </a>
                <a href={project.github} className="btn btn-outline" style={{ flex: 1, padding: '0.5rem' }}>
                  <FiGithub size={18} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
