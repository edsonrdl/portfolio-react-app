import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

const Portfolio = () => {
  const [activeMediaProj, setActiveMediaProj] = useState(null);

  return (
    <section id="portfolio" className="section-container">
      <h2 className="section-title">
        Selected <span>Works</span>
      </h2>
      
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card">
            {/* O background é a imagem ou video renderizado */}
            {project.video ? (
              <video 
                src={project.video} 
                className="project-bg-media" 
                loop 
                muted 
                playsInline
                preload="none"
                poster={project.images && project.images.length > 0 ? project.images[0] : ""}
                onMouseEnter={(e) => e.target.play().catch(() => {})}
                onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
              />
            ) : project.images && project.images.length > 0 ? (
              <img src={project.images[0]} alt={project.title} className="project-bg-media" />
            ) : null}

            <div className="project-overlay"></div>

            <div className="project-content">
              <div className="project-type">{project.type}</div>
              <h3 className="project-title">{project.title}</h3>
              
              <div className="tech-container">
                {project.techs.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
                {project.techs.length > 4 && <span className="tech-badge">+{project.techs.length - 4}</span>}
              </div>

              <p className="project-description">
                {project.description.slice(0, 100)}...
              </p>

              <div className="project-buttons">
                {(project.video || (project.images && project.images.length > 0)) && (
                  <button 
                    onClick={() => setActiveMediaProj(project)}
                    className="btn btn-outline" style={{ padding: '10px 20px', borderRadius: '50px', borderColor: 'rgba(244, 95, 144, 0.5)', color: 'var(--text-main)' }}>
                    [ ▶ ] Ver Demo
                  </button>
                )}
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

      {/* Modal Lightbox de Mídia */}
      {activeMediaProj && (
        <div className="media-modal-overlay" onClick={() => setActiveMediaProj(null)}>
          <div className="media-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveMediaProj(null)}>&times;</button>
            <div className="modal-body">
              {activeMediaProj.video ? (
                <video src={activeMediaProj.video} controls autoPlay className="modal-media-element" />
              ) : activeMediaProj.images && activeMediaProj.images.length > 0 ? (
                <div className="modal-gallery">
                  {activeMediaProj.images.map((img, i) => (
                    <img key={i} src={img} alt={`Screenshot ${i}`} className="modal-media-element gallery-img" />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="modal-footer">
               <span className="project-type">{activeMediaProj.type}</span>
               <h3>{activeMediaProj.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
