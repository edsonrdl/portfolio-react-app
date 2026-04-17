import React from 'react';
import { profile } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section-container contact-section">
      <h2 className="contact-subtitle">Let's Talk</h2>

      <a href={`mailto:${profile.contacts.email}`} className="contact-email-link">
        <h1 className="display-title text-stroke contact-email">
          {profile.contacts.email}
        </h1>
      </a>

      <div className="contact-actions">
        <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline contact-btn">
          LinkedIn
        </a>
        <a href={profile.contacts.github} target="_blank" rel="noreferrer" className="btn btn-outline contact-btn">
          GitHub
        </a>
        <a href={profile.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary contact-btn">
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
