import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navigation.css'
import RevealText from '../UI/RevealText';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    // Clear saved scroll position
    sessionStorage.removeItem('homeScrollPosition');
    // If already on home, scroll to top
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    } else {
      // Navigate to home (will start at top)
      navigate('/');
    }
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // If on home page, just scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home first, then scroll to section
      sessionStorage.removeItem('homeScrollPosition');
      navigate('/');
      // Wait for navigation and DOM to be ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`nav-bar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="nav-container">
        <div className="nav-logo-social">
          <button className="nav-logo" aria-label="Home" onClick={handleLogoClick}>
            KC
          </button>
          <a
            href="https://www.linkedin.com/in/kent-cyrem"
            target="_blank"
            rel="noreferrer"
            className="button-linked-in"
          >
            <RevealText 
              shortText="LNKDN" 
              fullText="LINKEDIN"
              speed={50}
            />
          </a>
          <a
            href="https://github.com/Cywem"
            target="_blank"
            rel="noreferrer"
            className="button-github"
          >
            <RevealText 
              shortText="GTHB" 
              fullText="GITHUB"
              speed={50}
            />
          </a>
        </div>
        <button
          className="nav-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div className="nav-pages">
          <a href="#projects" className="page-link" onClick={(e) => handleSectionClick(e, 'projects')}>PROJECTS</a>
          <a href="#tech-stack" className="page-link" onClick={(e) => handleSectionClick(e, 'tech-stack')}>TECH STACK</a>
          <a href="#about" className="page-link" onClick={(e) => handleSectionClick(e, 'about')}>ABOUT</a>
        </div>
      </div>
      <div className="nav-mobile-panel" id="mobile-navigation-menu">
        <a href="#projects" className="page-link" onClick={(e) => handleSectionClick(e, 'projects')}>PROJECTS</a>
        <a href="#tech-stack" className="page-link" onClick={(e) => handleSectionClick(e, 'tech-stack')}>TECH STACK</a>
        <a href="#about" className="page-link" onClick={(e) => handleSectionClick(e, 'about')}>ABOUT</a>
        <div className="nav-mobile-socials">
          <a
            href="https://www.linkedin.com/in/kent-cyrem"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/Cywem"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
