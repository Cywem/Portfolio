import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import './hero.css';
import DownloadButton from '../UI/DownloadButton';
import ASCIIText from '../UI/ASCIIText';
import DecryptedText from '../UI/DecryptedText';

import githubAnimation from '../../assets/icons/github.json';
import linkedinAnimation from '../../assets/icons/linkedin.json';
import githubHoverAnimation from '../../assets/icons/github-hover.json';
import linkedinHoverAnimation from '../../assets/icons/linkedin-hover.json';
import myPicture from '../../assets/images/my-picture.webp';
import cvFile from '../../assets/images/PATASIN-CV.pdf';

const Hero = () => {
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const githubTimeoutRef = useRef(null);
  const linkedinTimeoutRef = useRef(null);
  const [showPicture, setShowPicture] = useState(false);
  const [picturePosition, setPicturePosition] = useState({ x: 0, y: 0 });

  const updatePicturePosition = (e) => {
    const overlayWidth = 200;
    const overlayHeight = 200;
    const offset = 20;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    let x = e.clientX + offset;
    let y = e.clientY + offset;
    
    if (x + overlayWidth > viewportWidth) x = viewportWidth - overlayWidth - 12;
    if (y + overlayHeight > viewportHeight) y = viewportHeight - overlayHeight - 12;
    if (x < 12) x = 12;
    if (y < 12) y = 12;
    
    setPicturePosition({ x, y });
  };

  return (
    <section className="hero-section" role="region" aria-label="Hero Section">
      <div className="hero-content">
        <div className="hero-title">
          <ASCIIText
            text="CYREM"
            enableWaves={true}
            asciiFontSize={6}
            textFontSize={500}
            planeBaseHeight={20}
          />
        </div>
        <div className="hero-subtitle animate-fade-in">
          <h1 className='job-title'>
            <DecryptedText 
              text="Front-End Developer"
              speed={30}
              maxIterations={15}
              sequential={true}
              animateOn="view"
            />
          </h1>
          <p className='job-summary animate-slide-up' style={{ animationDelay: '0.5s' }}>Im <span 
            className='name-hover'
            onMouseEnter={(e) => {
              setShowPicture(true);
              updatePicturePosition(e);
            }}
            onMouseMove={updatePicturePosition}
            onMouseLeave={() => setShowPicture(false)}
          >Kent Cyrem Patasin</span> I focus on <span className='skill-highlight'>Web Development</span>, <span className='skill-highlight'>Prototyping</span>, <span className='skill-highlight'>Wireframing</span> & <span className='skill-highlight'>UI/UX Design</span>, creating interfaces that are clear, functional, and easy to use.</p>
          <p className='location animate-slide-up' style={{ animationDelay: '0.7s' }}>Calamba, Philippines</p>
          
          <div className='find-me-container animate-slide-up' style={{ animationDelay: '0.9s' }}>
            <p>YOU CAN FIND ME</p>
            <div className='find-me-icon-container'>
              <a 
                href="https://linkedin.com" 
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
                href="https://github.com" 
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
          </div>

          <div className='animate-slide-up' style={{ animationDelay: '1.1s' }}>
            <DownloadButton 
              href={cvFile}
            />
          </div>
        </div>
        
        {/* Picture Hover Overlay */}
        {showPicture && (
          <div 
            className="picture-hover-overlay"
            style={{
              left: `${picturePosition.x}px`,
              top: `${picturePosition.y}px`
            }}
          >
            <img src={myPicture} alt="Kent Cyrem Patasin" />
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
