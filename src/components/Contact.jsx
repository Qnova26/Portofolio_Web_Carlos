import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--color-border)',
  padding: '0.85rem 1.1rem',
  borderRadius: 'var(--radius-md)',
  color: 'var(--color-text)',
  outline: 'none',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-main)',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus]     = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [focused, setFocused]   = useState({});

  const focusStyle = (field) =>
    focused[field]
      ? { borderColor: 'var(--color-primary)', boxShadow: '0 0 0 3px var(--color-primary-glow)' }
      : {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSuccess(true); setStatus('');
      e.target.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, () => {
      setStatus('Failed to send. Please try again.');
      setTimeout(() => setStatus(''), 4000);
    });
  };

  const socialLinks = [
    { href: `mailto:${personalInfo.email}`, icon: <FiMail size={17} />,     label: personalInfo.email,  external: false },
    { href: personalInfo.linkedin,           icon: <FiLinkedin size={17} />, label: 'LinkedIn',          external: true  },
    { href: personalInfo.github,             icon: <FiGithub size={17} />,   label: 'GitHub',            external: true  },
  ];

  return (
    <section id="contact" style={{ background: 'rgba(13, 18, 32, 0.6)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="section-eyebrow"
          >
            Let's Talk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-title"
          >
            Get in Touch
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="section-subtitle"
          >
            Have a project or opportunity in mind? I'd love to hear from you.
          </motion.span>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass"
          style={{
            maxWidth: '540px', margin: '0 auto',
            padding: '2.5rem',
            borderRadius: 'var(--radius-xl)',
            borderTop: '2px solid rgba(99, 179, 237, 0.3)',
          }}
        >
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <FiCheckCircle size={52} style={{ color: 'var(--color-green)', marginBottom: '1rem' }} />
              </motion.div>
              <h3 style={{ color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                Message Sent! 🎉
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.02em' }}>Name</label>
                <input
                  type="text" name="user_name" required placeholder="Your full name"
                  style={{ ...inputStyle, ...focusStyle('name') }}
                  onFocus={() => setFocused(p => ({ ...p, name: true }))}
                  onBlur={() => setFocused(p => ({ ...p, name: false }))}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Email Address</label>
                <input
                  type="email" name="user_email" required placeholder="your@email.com"
                  style={{ ...inputStyle, ...focusStyle('email') }}
                  onFocus={() => setFocused(p => ({ ...p, email: true }))}
                  onBlur={() => setFocused(p => ({ ...p, email: false }))}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Message</label>
                <textarea
                  name="message" rows="4" required placeholder="Tell me about your project..."
                  style={{ ...inputStyle, ...focusStyle('msg'), resize: 'vertical', minHeight: '120px' }}
                  onFocus={() => setFocused(p => ({ ...p, msg: true }))}
                  onBlur={() => setFocused(p => ({ ...p, msg: false }))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'Sending...'}
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', borderRadius: 'var(--radius-md)', justifyContent: 'center', marginTop: '0.25rem' }}
              >
                {status === 'Sending...' ? 'Sending...' : <><FiSend size={15} /> Send Message</>}
              </button>

              {status && status !== 'Sending...' && (
                <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#fc8181', fontWeight: 500 }}>
                  {status}
                </p>
              )}
            </form>
          )}

          {/* Social links */}
          <div style={{
            marginTop: '2rem', paddingTop: '1.75rem',
            borderTop: '1px solid var(--color-border)',
            display: 'flex', flexDirection: 'column', gap: '0.6rem',
          }}>
            {socialLinks.map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  color: 'var(--color-text-muted)', fontSize: '0.88rem',
                  padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-dim)'; e.currentTarget.style.color = 'var(--color-primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
