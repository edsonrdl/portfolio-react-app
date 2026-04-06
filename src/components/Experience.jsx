import React from 'react';
import { history, skillsList } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-container" style={{ position: 'relative' }}>
      
      <div className="modern-grid" style={{ marginBottom: '120px' }}>
         <div style={{ gridColumn: 'span 4' }}>
            <h2 className="section-title">
               Work <span>Experience</span>
            </h2>
         </div>
         
         <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {history.experience.map((exp, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '40px' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '5px' }}>{exp.company}</h3>
                      <h4 style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.9rem' }}>{exp.role}</h4>
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', border: '1px solid var(--border-color)', padding: '5px 15px', borderRadius: '50px' }}>
                      {exp.period}
                    </div>
                 </div>
                 
                 <p style={{ color: 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.8' }}>
                   {exp.description}
                 </p>
                 
                 <ul style={{ listStyleType: 'circle', paddingLeft: '20px', color: 'var(--text-dark)' }}>
                   {exp.bullets.map((bullet, i) => (
                      <li key={i} style={{ marginBottom: '10px' }}>{bullet}</li>
                   ))}
                 </ul>
              </div>
            ))}
         </div>
      </div>

      <div className="modern-grid" style={{ marginBottom: '100px' }}>
         <div style={{ gridColumn: 'span 4' }}>
            <h2 className="section-title">
               Tech <span>Stack</span>
            </h2>
         </div>
         <div style={{ gridColumn: 'span 8' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {skillsList.map((skill, idx) => (
                <div key={idx} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
         </div>
      </div>

      <div className="modern-grid" style={{ marginBottom: '100px' }}>
         <div style={{ gridColumn: 'span 12', textAlign: 'center' }}>
            <div style={{ height: '1px', background: 'var(--border-color)', margin: '40px 0' }}></div>
            <p style={{ color: 'var(--text-muted)', letterSpacing: '2px', fontSize: '0.9rem', textTransform: 'uppercase' }}>
               {history.education[0]}
            </p>
         </div>
      </div>

    </section>
  );
};

export default Experience;
