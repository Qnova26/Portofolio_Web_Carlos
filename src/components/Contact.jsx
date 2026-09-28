import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate EmailJS integration logic for now
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="container" style={{ padding: '6rem 2rem' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Let's Connect
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass"
        style={{ maxWidth: '550px', margin: '0 auto', padding: '2.5rem', borderRadius: '20px', borderTop: '2px solid rgba(0, 240, 255, 0.3)' }}
      >
        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '2rem', fontSize: '1rem' }}>
          Have a project in mind or want to collaborate? <br/> Send me a message!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Name</label>
            <input 
              type="text" 
              required 
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.8rem 1rem', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border 0.3s' }} 
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Email Address</label>
            <input 
              type="email" 
              required 
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.8rem 1rem', borderRadius: '8px', color: '#fff', outline: 'none', transition: 'border 0.3s' }} 
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Message</label>
            <textarea 
              rows="4" 
              required 
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.8rem 1rem', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical', transition: 'border 0.3s' }} 
              onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', fontSize: '1rem', marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
            {status || 'Send Message'}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--color-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--color-text-muted)'}><FiMail size={22} /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--color-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--color-text-muted)'}><FiLinkedin size={22} /></a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--color-primary)'} onMouseOut={e => e.currentTarget.style.color='var(--color-text-muted)'}><FiGithub size={22} /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
