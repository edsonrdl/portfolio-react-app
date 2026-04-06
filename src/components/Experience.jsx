import React from 'react';
import { history, skillsList } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-container" style={{ position: 'relative' }}>
      
      <div className="modern-grid" style={{ marginBottom: '100px' }}>
         <div style={{ gridColumn: 'span 5' }}>
            <h2 className="section-title">
               Work <span>Experience</span>
            </h2>
         </div>
         <div style={{ gridColumn: 'span 7' }}>
            <div className="glass-card">
              {history.experience.map((exp, idx) => (
                 <p key={idx} style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text-dark)' }}>{exp}</p>
              ))}
            </div>
         </div>
      </div>

      <div className="modern-grid" style={{ marginBottom: '100px' }}>
         <div style={{ gridColumn: 'span 5' }}>
            <h2 className="section-title">
               Tech <span>Stack</span>
            </h2>
         </div>
         <div style={{ gridColumn: 'span 7' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {skillsList.map((skill, idx) => (
                <div key={idx} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
         </div>
      </div>

    </section>
  );
};

export default Experience;
