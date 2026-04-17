import React from 'react';
import { history, skillsList, softSkillsList } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="section-container" style={{ position: 'relative' }}>
      
      <div className="modern-grid" style={{ marginBottom: '120px' }}>
         <div style={{ gridColumn: 'span 5', position: 'sticky', top: '100px', height: 'fit-content' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', lineHeight: '1.2' }}>
               Experiência<br/><span>Profissional</span>
            </h2>
         </div>
         
         <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '40px' }}>
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
         <div style={{ gridColumn: 'span 5', position: 'sticky', top: '100px', height: 'fit-content' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', lineHeight: '1.2' }}>
               Conjunto de<br/><span>Tecnologias</span>
            </h2>
         </div>
         
         <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {skillsList.map((categoryBlock, blockIdx) => (
               <div key={`category-${blockIdx}`} className="skill-category-wrapper">
                  {/* Título da Categoria */}
                  <h3 style={{ 
                     fontSize: '1.2rem', 
                     fontWeight: '600',
                     color: 'var(--primary)',
                     marginBottom: '15px', 
                     opacity: '0.8' 
                  }}>
                     {categoryBlock.category}
                  </h3>
                  
                  {/* Tags das tecnologias daquela categoria */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                     {categoryBlock.skills.map((skill, skillIdx) => (
                        <div key={`skill-${blockIdx}-${skillIdx}`} className="skill-tag">
                           {skill}
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </div>

      <div className="modern-grid" style={{ marginBottom: '100px' }}>
         <div style={{ gridColumn: 'span 5', position: 'sticky', top: '100px', height: 'fit-content' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', lineHeight: '1.2' }}>
               Habilidades<br/><span>Interpessoais</span>
            </h2>
         </div>
         <div style={{ gridColumn: 'span 7' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {softSkillsList.map((skill, idx) => (
                <div key={idx} className="skill-tag" style={{ border: '1px solid var(--primary)', color: 'var(--primary)', background: 'transparent' }}>
                  {skill}
                </div>
              ))}
            </div>
         </div>
      </div>

      <div style={{ marginBottom: '100px' }}>
         <div style={{ textAlign: 'center' }}>
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
