import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-nav ${scrolled ? 'glass' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/assets/asi-logo.svg" alt="Asi" className="logo-icon" style={{ width: '45px', filter: 'drop-shadow(0 0 15px rgba(244,95,144,0.5))', transition: 'all 0.3s ease' }} />
          <div className="logo-text" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', textShadow: '0 0 20px rgba(244,95,144,0.4)', color: 'var(--text-main)' }}>
            ASI<span style={{ color: 'var(--primary)' }}>.</span>
          </div>
        </a>

        <nav className="nav-desktop">
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#portfolio" className="nav-link">Portfólio</a></li>
            <li><a href="#about" className="nav-link">Sobre mim</a></li>
            <li><a href="#services" className="nav-link">Serviços</a></li>
             <li><a href="#contact" className="nav-link">Contatos</a></li>
          </ul>
        </nav>
        
        <button className="btn-outline mobile-menu-btn" style={{ padding: '8px', border: 'none', color: 'var(--primary)', fontWeight: 'bold' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
           {mobileMenuOpen ? "[ X ]" : "[ MENU ]"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#portfolio" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Portfólio</a></li>
          <li><a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Sobre mim</a></li>
          <li><a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Serviços</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contatos</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
