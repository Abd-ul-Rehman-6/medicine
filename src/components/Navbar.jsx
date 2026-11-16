import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import '../styles/Hero.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const closeTimer = useRef(null);

  const openFeatures = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setFeaturesOpen(true);
  };
  const closeFeatures = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => { setFeaturesOpen(false); closeTimer.current = null; }, 220);
  };

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  useEffect(() => {
    if (!featuresOpen) return undefined;
    const close = (e) => { if (e.target.closest('.features-dropdown')) return; setFeaturesOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [featuresOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => { setMobileOpen(false); setMobileFeaturesOpen(false); };

  return (
    <>
      <header className={`navbar anim-line-horizontal ${isScrolled ? 'navbar-hidden' : ''}`}>
        <a href="#/" className="logo anim-logo" onClick={() => window.scrollTo({ top: 0 })}>
          <div className="custom-logo-icon"><span></span><span></span><span></span></div>
          <span className="brand-name">MediLife</span>
        </a>

        <div className="nav-right">
          <nav className="nav-links">
            <div className={`nav-item dropdown features-dropdown anim-link anim-link-1 ${featuresOpen ? 'open' : ''}`}
              onClick={(e) => { e.stopPropagation(); setFeaturesOpen(true); }}
              onMouseEnter={openFeatures} onMouseLeave={closeFeatures}>
              <span>Features</span>
              <ChevronDown size={14} className="dropdown-chevron" />
              <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                <a href="#never-miss" onClick={() => setFeaturesOpen(false)}>Never Miss a Dose</a>
                <a href="#track-every-dose" onClick={() => setFeaturesOpen(false)}>Track Every Dose</a>
              </div>
            </div>
            <a href="#daily-dose" className="nav-item anim-link anim-link-2">Blog</a>
            <a href="#faqs" className="nav-item anim-link anim-link-3">FAQs</a>
            <a href="#caregivers" className="nav-item anim-link anim-link-4">For Caregivers</a>
          </nav>
          <button className="btn-get-started anim-btn">GET STARTED</button>
        </div>

        <button className="hamburger-btn" aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobile}>
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-menu-close" onClick={closeMobile} aria-label="Close menu">
              <X size={20} />
            </button>
            <div className="mobile-menu-section">
              <button
                className="mobile-menu-features-btn"
                onClick={() => setMobileFeaturesOpen((v) => !v)}
              >
                <span className="mobile-menu-label">Features</span>
                <ChevronDown size={14} className={mobileFeaturesOpen ? 'rotated' : ''} />
              </button>
              {mobileFeaturesOpen && (
                <div className="mobile-features-dropdown">
                  <a href="#never-miss" onClick={closeMobile}>Never Miss a Dose</a>
                  <a href="#track-every-dose" onClick={closeMobile}>Track Every Dose</a>
                </div>
              )}
            </div>
            <a href="#daily-dose" className="mobile-menu-link" onClick={closeMobile}>Blog</a>
            <a href="#faqs" className="mobile-menu-link" onClick={closeMobile}>FAQs</a>
            <a href="#caregivers" className="mobile-menu-link" onClick={closeMobile}>For Caregivers</a>
            <button className="btn-get-started mobile-menu-btn">GET STARTED</button>
          </nav>
        </div>
      )}

      <header className={`floating-navbar ${isScrolled ? 'visible' : ''}`}>
        <a href="#/" className="logo" onClick={() => window.scrollTo({ top: 0 })}>
          <div className="custom-logo-icon dark-bars"><span></span><span></span><span></span></div>
          <span className="brand-name dark-text">MediLife</span>
        </a>

        <div className="nav-right">
          <nav className="nav-links">
            <div className={`nav-item dropdown features-dropdown dark-text ${featuresOpen ? 'open' : ''}`}
              onClick={(e) => { e.stopPropagation(); setFeaturesOpen(true); }}
              onMouseEnter={openFeatures} onMouseLeave={closeFeatures}>
              <span>Features</span>
              <ChevronDown size={14} className="dropdown-chevron" />
              <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                <a href="#never-miss" onClick={() => setFeaturesOpen(false)}>Never Miss a Dose</a>
                <a href="#track-every-dose" onClick={() => setFeaturesOpen(false)}>Track Every Dose</a>
              </div>
            </div>
            <a href="#daily-dose" className="nav-item dark-text">Blog</a>
            <a href="#faqs" className="nav-item dark-text">FAQs</a>
            <a href="#caregivers" className="nav-item dark-text">For Caregivers</a>
          </nav>
          <button className="btn-get-started scrolled-btn">GET STARTED</button>
        </div>

        <button className="hamburger-btn hamburger-dark" aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
    </>
  );
}
