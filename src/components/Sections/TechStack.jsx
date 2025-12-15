import { useEffect, useRef } from 'react';
import './techStack.css';
import reactIcon from '../../assets/icons/react-icon.svg';
import tailwindIcon from '../../assets/icons/tailwind-icon.svg';
import javascriptIcon from '../../assets/icons/javascript-icon.svg';
import cssIcon from '../../assets/icons/css-icon.svg';
import htmlIcon from '../../assets/icons/html-icon.svg';
import figmaIcon from '../../assets/icons/figma-icon.svg';
import photoshopIcon from '../../assets/icons/photoshop-icon.svg';
import canvaIcon from '../../assets/icons/canva-icon.svg';
import cIcon from '../../assets/icons/c-icon.svg';
import pythonIcon from '../../assets/icons/python-icon.svg';
import cppIcon from '../../assets/icons/c++-icon.svg';

const TechStack = () => {
  const technologies = [
    { name: 'REACT', icon: reactIcon },
    { name: 'TAILWIND', icon: tailwindIcon },
    { name: 'JAVASCRIPT', icon: javascriptIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'FIGMA', icon: figmaIcon },
    { name: 'PHOTOSHOP', icon: photoshopIcon },
    { name: 'CANVA', icon: canvaIcon },
    { name: '', icon: cIcon },
    { name: 'PYTHON', icon: pythonIcon },
    { name: '', icon: cppIcon },
  ];

  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const basePositionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTime = performance.now();

    const SPEED = 90; // Movement speed (pixels per second)

    // Animation loop
    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;

      // Update position at constant speed
      basePositionRef.current += SPEED * deltaTime;

      // Get track width for seamless looping
      const trackWidth = track.scrollWidth / 2; // Divide by 2 because we duplicate content

      // Seamless loop: reset position when track moves full width
      if (basePositionRef.current <= -trackWidth) {
        basePositionRef.current += trackWidth;
      } else if (basePositionRef.current >= 0) {
        basePositionRef.current -= trackWidth;
      }

      // Apply transform
      track.style.transform = `translateX(${basePositionRef.current}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="tech-stack-section" id="tech-stack" aria-label="Technology Stack">
      <div className="tech-stack-marquee-container">
        <div className="tech-stack-marquee-track" ref={trackRef}>
          {/* First set of technologies */}
          {technologies.map((tech, index) => (
            <div key={`first-${index}`} className="tech-stack-badge" aria-label={tech.name}>
              <img 
                src={tech.icon} 
                alt={`${tech.name} icon`} 
                className="tech-stack-icon"
              />
              <span className="tech-stack-name">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless infinite loop */}
          {technologies.map((tech, index) => (
            <div key={`second-${index}`} className="tech-stack-badge" aria-label={tech.name} aria-hidden="true">
              <img 
                src={tech.icon} 
                alt={`${tech.name} icon`} 
                className="tech-stack-icon"
              />
              <span className="tech-stack-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;