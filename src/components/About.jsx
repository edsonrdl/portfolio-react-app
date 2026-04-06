import React from 'react';
import { profile } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-container" style={{ position: 'relative' }}>
      
      <div className="modern-grid">
        <div style={{ gridColumn: 'span 6', paddingRight: '40px' }}>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          
          <h3 style={{ fontSize: '2rem', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>
             {profile.role}
          </h3>
          
          {profile.aboutText.map((text, idx) => (
             <p key={idx} style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '20px' }}>
               {text}
             </p>
          ))}
          
        </div>
        
        <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <h2 className="section-title">
             The <span>Brand</span> (Asi)
          </h2>
          
          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
               <img src="/assets/asi-logo.svg" alt="Asi Logo" style={{ width: '120px' }} />
            </div>
            {profile.asiCodeDescription.map((desc, idx) => (
               <p key={idx} style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>{desc}</p>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
            {profile.stats.map((stat, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                <div style={{ fontSize: '3rem', fontFamily: 'var(--font-display)', color: 'var(--primary)', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
