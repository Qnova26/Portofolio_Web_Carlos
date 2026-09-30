import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';
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
      setTimeout(() => setStatus(''), 4000);
    }, (error) => {
      console.error(error.text);
      setStatus('Failed to send message. Please try again.');
      setTimeout(() => setStatus(''), 4000);
    });
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-editor)',
    border: '1px solid var(--border)',
    padding: '0.75rem 1rem',
    borderRadius: '4px',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border 0.2s ease',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.88rem',
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-editor)', padding: '6rem 0 8rem' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="vsc-comment"
          >
            {'// section: contact & collaboration'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="kw">async function </span>
            <span className="fn">sendMessage</span>
            <span className="punct">(</span>
            <span className="prop">payload</span>
            <span className="punct">) {'{'}</span>
          </motion.h2>
          <div className="vsc-divider" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="vsc-panel"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '6px',
            overflow: 'hidden',
            borderTop: '2px solid var(--accent)',
          }}
        >
          {/* Form Header / Tab */}
          <div style={{
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border)',
            padding: '0.5rem 1.2rem',
            fontSize: '0.78rem',
            fontFamily: 'JetBrains Mono, monospace',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            <span style={{ color: 'var(--syntax-green)' }}>✉</span>
            <span>contact_form.ts</span>
          </div>

          <div style={{ padding: '2rem' }}>
            <p style={{
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: '0.92rem',
              fontFamily: 'Inter, sans-serif',
            }}>
              Have a project in mind, a question, or want to collaborate? <br />
              Send me a direct message below!
            </p>

            <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <label style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--syntax-blue)' }}>
                  const <span style={{ color: 'var(--text-primary)' }}>senderName</span>: <span style={{ color: 'var(--syntax-cyan)' }}>string</span> =
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <label style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--syntax-blue)' }}>
                  const <span style={{ color: 'var(--text-primary)' }}>senderEmail</span>: <span style={{ color: 'var(--syntax-cyan)' }}>Email</span> =
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="your.email@domain.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <label style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: 'var(--syntax-blue)' }}>
                  const <span style={{ color: 'var(--text-primary)' }}>messageBody</span>: <span style={{ color: 'var(--syntax-cyan)' }}>string</span> =
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'Sending...'}
                style={{
                  padding: '0.75rem',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  width: '100%',
                  justify: 'center',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {status === 'Message sent successfully!' ? (
                  <><FiCheckCircle size={16} /> Message Sent!</>
                ) : (
                  <><FiSend size={16} /> {status || 'await dispatch(message);'}</>
                )}
              </button>
            </form>

            {/* Social Links Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              gap: '1.5rem',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border)',
            }}>
              {[
                { href: `mailto:${personalInfo.email}`, icon: <FiMail size={18} />, label: 'Email' },
                { href: personalInfo.linkedin, icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
                { href: personalInfo.github, icon: <FiGithub size={18} />, label: 'GitHub' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  title={label}
                  style={{
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {icon} <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
