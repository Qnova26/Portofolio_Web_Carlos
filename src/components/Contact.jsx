import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section id="contact" className="container" style={{ padding: '8rem 2rem' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass"
        style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem', borderRadius: '24px' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Let's Connect</h2>
        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '3rem' }}>
          Interested in working together or have a question? Drop me a message below.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Name</label>
              <input 
                type="text" 
                required 
                style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none' }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Email</label>
              <input 
                type="email" 
                required 
                style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none' }} 
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Message</label>
            <textarea 
              rows="5" 
              required 
              style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical' }} 
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
            {status || 'Send Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
