import { useRef, useState} from 'react';
import Lottie from 'lottie-react';
import './footer.css';

import myCharacter from '../../assets/icons/my-character.svg';
import githubAnimation from '../../assets/icons/github.json';
import linkedinAnimation from '../../assets/icons/linkedin.json';
import githubHoverAnimation from '../../assets/icons/github-hover.json';
import linkedinHoverAnimation from '../../assets/icons/linkedin-hover.json';

const Footer = () => {
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const githubTimeoutRef = useRef(null);
  const linkedinTimeoutRef = useRef(null);
  // Dynamic greeting based on user's local time
  const getGreeting = () => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      return 'GOOD MORNING';
    } else if (hour >= 12 && hour < 17) {
      return 'GOOD AFTERNOON';
    } else if (hour >= 17 && hour < 21) {
      return 'GOOD EVENING';
    } else {
      return 'GOOD NIGHT';
    }
  };

  const greeting = getGreeting();

  return (
    <footer className="footer-section">
      <div className="header-footer">
        <div className='header-footer-container'>
          <div className='footer-title'>
            <a href="/" onClick={() => window.location.reload()}>KENT CYREM</a>
            <p>© 2026 | All rights reserved.</p>
          </div>
          <div className='footer-socials'>
            <div className='footer-socials-links'>
              <a 
                href="https://www.linkedin.com/in/kent-cyrem/" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  if (linkedinTimeoutRef.current) {
                    clearTimeout(linkedinTimeoutRef.current);
                  }
                  setLinkedinHovered(true);
                  linkedinTimeoutRef.current = setTimeout(() => {
                    if (linkedinRef.current) {
                      linkedinRef.current.play();
                    }
                  }, 50);
                }}
                onMouseLeave={() => {
                  if (linkedinTimeoutRef.current) {
                    clearTimeout(linkedinTimeoutRef.current);
                  }
                  setLinkedinHovered(false);
                  if (linkedinRef.current) {
                    linkedinRef.current.stop();
                  }
                }}
              >
                <Lottie 
                  lottieRef={linkedinRef}
                  animationData={linkedinHovered ? linkedinHoverAnimation : linkedinAnimation}
                  loop={true}
                  autoplay={false}
                  style={{ width: 28, height: 28 }}
                />
              </a>
              <a 
                href="https://github.com/Cywem" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  if (githubTimeoutRef.current) {
                    clearTimeout(githubTimeoutRef.current);
                  }
                  setGithubHovered(true);
                  githubTimeoutRef.current = setTimeout(() => {
                    if (githubRef.current) {
                      githubRef.current.play();
                    }
                  }, 50);
                }}
                onMouseLeave={() => {
                  if (githubTimeoutRef.current) {
                    clearTimeout(githubTimeoutRef.current);
                  }
                  setGithubHovered(false);
                  if (githubRef.current) {
                    githubRef.current.stop();
                  }
                }}
              >
                <Lottie 
                  lottieRef={githubRef}
                  animationData={githubHovered ? githubHoverAnimation : githubAnimation}
                  loop={true}
                  autoplay={false}
                  style={{ width: 28, height: 28 }}
                />
              </a>
            </div>
            <div>
              <p>Calamba, Philippines</p>
            </div>
          </div>
        </div>
      </div>
      <div className='vector-footer'>
        <img src={myCharacter} alt="My Character" className='footer-character' />
        <div className='footer-text-container'>
          <h1 className='footer-greeting'>{greeting}</h1>
          <p className='footer-tagline'>IT WAS NICE TO MEET YOU</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
