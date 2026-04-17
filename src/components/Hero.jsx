import React from 'react';
import { profile } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-decorator hero-decorator-1" />
      <div className="hero-decorator hero-decorator-2" />

      <div className="section-container hero-content">
        <div className="hero-brand" style={{ marginBottom: '40px', animation: 'float 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite' }}>
          <img src={import.meta.env.BASE_URL + 'assets/asi-logo.svg'} alt="Asi Logo" />
        </div>

        <div className="hero-text" style={{ animation: 'fadeIn 1s ease-out forwards' }}>
          <h2 className="hero-subtitle">Olá, mundo.</h2>
          <h1 className="display-title" style={{ marginBottom: '10px' }}>
            EDSON <span className="text-stroke">LOPES</span>
          </h1>
          <h1 className="display-title text-stroke" style={{ marginBottom: '40px', fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
            FULL STACK DEV
          </h1>
        </div>

        <p className="hero-copy" style={{ animation: 'fadeIn 1.5s ease-out forwards' }}>
          {profile.shortDescription}
        </p>

        <div className="hero-actions" style={{ animation: 'fadeIn 2s ease-out forwards' }}>
          <a href="#portfolio" className="btn btn-primary">
            Explorar Obras [ ↓ ]
          </a>
          <div className="hero-socials">
            <a href={profile.contacts.github} target="_blank" rel="noreferrer" className="btn btn-outline hero-social-btn">
              GH
            </a>
            <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline hero-social-btn">
              IN
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" style={{ animation: 'fadeIn 3s ease-out forwards' }}>
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
