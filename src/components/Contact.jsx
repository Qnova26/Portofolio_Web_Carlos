import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
      setTimeout(() => setStatus(''), 3000);
    }, (error) => {
      console.error(error.text);
      setStatus('Failed to send message. Please try again.');
      setTimeout(() => setStatus(''), 3000);
    });
  };

  const inputStyle = {
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    color: '#fff',
    outline: 'none',
    transition: 'border 0.3s',
    fontFamily: 'var(--font-main)',
    fontSize: '0.95rem',
  };

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
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
          style={{
            maxWidth: '550px',
            margin: '0 auto',
            padding: '2.5rem',
            borderRadius: '20px',
            borderTop: '2px solid rgba(0, 240, 255, 0.3)',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '2rem', fontSize: '1rem' }}>
            Have a project in mind or want to collaborate? <br /> Send me a message!
          </p>

          <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Name</label>
              <input
                type="text" name="user_name" required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Email Address</label>
              <input
                type="email" name="user_email" required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Message</label>
              <textarea
                name="message" rows="4" required
                style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'Sending...'}
              style={{ padding: '0.8rem', fontSize: '1rem', marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
            >
              {status || 'Send Message'}
            </button>
          </form>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { href: `mailto:${personalInfo.email}`, icon: <FiMail size={22} /> },
              { href: personalInfo.linkedin, icon: <FiLinkedin size={22} /> },
              { href: personalInfo.github,   icon: <FiGithub size={22} /> },
            ].map(({ href, icon }) => (
              <a
                key={href} href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.3s, text-shadow 0.3s' }}
                onMouseOver={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.textShadow = '0 0 8px var(--color-primary)'; }}
                onMouseOut={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.textShadow = 'none'; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
