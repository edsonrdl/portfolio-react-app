import React from 'react';
import { profile } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorators */}
      <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--primary-faded) 0%, transparent 60%)', filter: 'blur(100px)', zIndex: 0, opacity: 0.5 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0 }}></div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* SVG Logo Animada (Gigante no fundo ou integrando o centro) */}
        <div style={{ marginBottom: '40px', animation: 'float 6s ease-in-out infinite, glowPulse 4s ease-in-out infinite' }}>
          <img src="/assets/asi-logo.svg" alt="Asi Logo" style={{ width: '250px', height: 'auto', filter: 'drop-shadow(0 0 30px rgba(244,95,144,0.4))' }} />
        </div>

        {/* Typographic Hero */}
        <div style={{ animation: 'fadeIn 1s ease-out forwards' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--primary)', letterSpacing: '8px', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '20px' }}>
            Olá, mundo.
          </h2>
          <h1 className="display-title" style={{ marginBottom: '10px' }}>
            EDSON <span className="text-stroke">LOPES</span>
          </h1>
          <h1 className="display-title text-stroke" style={{ marginBottom: '40px', fontSize: 'clamp(2rem, 5vw, 5rem)' }}>
            FULL STACK DEV
          </h1>
        </div>

        <p style={{ maxWidth: '600px', fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '50px', animation: 'fadeIn 1.5s ease-out forwards' }}>
          {profile.shortDescription} Design moderno, código fluido e experiências web de impacto.
        </p>

        <div style={{ display: 'flex', gap: '24px', animation: 'fadeIn 2s ease-out forwards' }}>
          <a href="#portfolio" className="btn btn-primary">
            Explorar Obras [ ↓ ]
          </a>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href={profile.contacts.github} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '16px', borderRadius: '50px' }}>
              GH
            </a>
            <a href={profile.contacts.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '16px', borderRadius: '50px' }}>
              IN
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.5, animation: 'fadeIn 3s ease-out forwards' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', display: 'block', letterSpacing: '3px', marginBottom: '10px', writingMode: 'vertical-rl' }}>SCROLL</span>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--text-main), transparent)' }}></div>
      </div>
    </section>
  );
};

export default Hero;
