import React from 'react';
import { projects } from '../data/portfolioData';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-container">
      <h2 className="section-title">
        Selected <span>Works</span>
      </h2>
      
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            {/* O background é a imagem renderizada com gradient dark acima dela para estilo moderno */}
            {project.images && project.images.length > 0 ? (
              <img src={project.images[0]} alt={project.title} className="project-bg-image" />
            ) : null}

            <div className="project-content">
              <div className="project-type">{project.type}</div>
              <h3 className="project-title">{project.title}</h3>
              
              <div style={{ marginBottom: '24px' }}>
                {project.techs.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
                {project.techs.length > 4 && <span className="tech-badge">+{project.techs.length - 4}</span>}
              </div>

              <p style={{ color: 'var(--text-dark)', marginBottom: '24px', opacity: 0.8 }}>
                {project.description.slice(0, 100)}...
              </p>

              <div style={{ display: 'flex', gap: '15px' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '10px 20px', borderRadius: '50px' }}>
                    [ GH ] Code
                  </a>
                )}
                {project.preview && (
                  <a href={project.preview} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '50px' }}>
                     Live [ ↗ ]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
