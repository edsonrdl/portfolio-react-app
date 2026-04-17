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
        <a href="#" className="logo-wrapper">
          <img src={import.meta.env.BASE_URL + 'assets/asi-logo.svg'} alt="Asi" className="logo-icon" />
          <div className="logo-text">
            ASI<span>.</span>
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
        
        <button
          className="btn-outline mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="mobile-menu-icon">{mobileMenuOpen ? '✕' : '☰'}</span>
          <span className="mobile-menu-text">{mobileMenuOpen ? 'Fechar' : 'Menu'}</span>
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
