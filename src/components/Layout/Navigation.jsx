import { useEffect, useState } from 'react';
import './navigation.css'
import RevealText from '../UI/RevealText';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="nav-container">
        <div className="nav-logo-social">
          <button className="nav-logo" aria-label="site initials">
            KC
          </button>
          <a
            href="https://www.linkedin.com"
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
            href="https://github.com"
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
        <div className="nav-pages">
          <a href="#projects" className="page-link">PROJECTS</a>
          <a href="#tech-stack" className="page-link">TECH STACK</a>
          <a href="#about" className="page-link">ABOUT</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation