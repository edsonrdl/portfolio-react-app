import React from 'react';
import { profile } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ position: 'relative', textAlign: 'center', paddingTop: '150px', paddingBottom: '150px' }}>
      
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--primary)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>
        Let's Talk
      </h2>
      
      <a href={`mailto:${profile.contacts.email}`} style={{ display: 'block', marginBottom: '60px' }}>
         <h1 className="display-title text-stroke" style={{ fontSize: 'clamp(2rem, 6vw, 6rem)', transition: 'all 0.3s ease' }}>
            {profile.contacts.email}
         </h1>
      </a>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
         <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '20px 40px' }}>
           LinkedIn
         </a>
         <a href={profile.contacts.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '20px 40px' }}>
           GitHub
         </a>
         <a href={profile.contacts.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '20px 40px' }}>
           WhatsApp
         </a>
      </div>

    </section>
  );
};

export default Contact;
