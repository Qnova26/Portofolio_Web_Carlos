import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
          {/* Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>My Identity</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
              {personalInfo.about}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '3rem' }}>
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="glass" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', textShadow: '0 0 15px rgba(0,240,255,0.4)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ padding: '2.5rem', borderRadius: '16px' }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Skills Matrix</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Data Science &amp; AI</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skills.dataScience.map((skill, i) => (
                    <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--color-primary)', borderRadius: '6px', fontSize: '0.9rem' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Web &amp; Backend</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skills.webDevelopment.map((skill, i) => (
                    <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'rgba(138, 43, 226, 0.15)', color: '#b275ff', borderRadius: '6px', fontSize: '0.9rem' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>Mobile Development</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skills.mobileDevelopment.map((skill, i) => (
                    <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--color-primary)', borderRadius: '6px', fontSize: '0.9rem' }}>{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem' }}>DevOps &amp; Tools</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skills.toolsAndDevOps.map((skill, i) => (
                    <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--color-text-muted)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
