import { useEffect, useRef, useState } from 'react';
import './Project.css';
import ProjectCard from '../UI/ProjectCard';
import DecryptedText from '../UI/DecryptedText';
import SeeMoreButton from '../UI/SeeMoreButton';
import kwiseSkeleton from '../../assets/images/kwise_skeleton.svg';
import kitsuneSkeleton from '../../assets/images/kitsune_skeleton.svg';

const Project = () => {
  const marqueeTrackRef = useRef(null);
  const marqueeAnimationRef = useRef(null);
  const marqueePositionRef = useRef(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    // Get the width of ONE content set (first ul element)
    const firstContent = track.querySelector('.marquee-content');
    if (!firstContent) return;

    // Wait for layout to be calculated
    requestAnimationFrame(() => {
      const singleSetWidth = firstContent.scrollWidth;
      let lastTime = performance.now();

      const SPEED = -40; // Movement speed (pixels per second, negative = left)

      // Animation loop
      const animate = (currentTime) => {
        const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
        lastTime = currentTime;

        // Update position at constant speed
        marqueePositionRef.current += SPEED * deltaTime;

        // Seamless loop: reset when one full set has passed
        // This ensures the duplicate immediately takes over with no gap
        if (marqueePositionRef.current <= -singleSetWidth) {
          marqueePositionRef.current += singleSetWidth;
        }

        // Apply transform
        track.style.transform = `translateX(${marqueePositionRef.current}px)`;

        marqueeAnimationRef.current = requestAnimationFrame(animate);
      };

      // Start animation
      marqueeAnimationRef.current = requestAnimationFrame(animate);
    });

    // Cleanup
    return () => {
      if (marqueeAnimationRef.current) {
        cancelAnimationFrame(marqueeAnimationRef.current);
      }
    };
  }, []);

  return (
    <section 
      className="project-section" 
      id="projects"
      onMouseEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
    >

      <div className='project-header'>
        <div className='project-header-container'>

          <div className='header-divider'></div>
          <div className='header-title-container'>
            <h2 className={`header-title ${hasAnimated ? 'animate-enter' : ''}`}>I MAKE PROJECTS</h2>
            <h2 className={`header-title ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
              FEEL {hasAnimated && <DecryptedText text="alive" speed={40} maxIterations={10} sequential={true} animateOn="view" />}
              {!hasAnimated && <span id='title-alive'>alive</span>}
            </h2>
            <p className={`header-subtitle ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.2s' }}>
              {hasAnimated && <DecryptedText text="Selected projects" speed={35} maxIterations={10} sequential={true} animateOn="view" />}
              {!hasAnimated && "Selected projects"}
            </p>
          </div>
          
          <div className='marquee-wrapper'>
            <div className='marquee-gradient-left'></div>
            <div className='marquee-gradient-right'></div>
            <div className='marquee-track' ref={marqueeTrackRef}>
              <ul className='marquee-content'>
                <li>WEBSITES</li>
                <li>PROTOTYPES</li>
                <li>KIOSK</li>
                <li>ARTIFICIAL INTELLIGENCE</li>
                <li>GRAPHICS</li>
                <li>PUBLICATIONS</li>
                <li>VECTOR</li>
                <li>USER INTERFACE</li>
                <li>USER EXPERIENCE</li>
              </ul>
              <ul className='marquee-content' aria-hidden='true'>
                <li>WEBSITES</li>
                <li>PROTOTYPES</li>
                <li>KIOSK</li>
                <li>ARTIFICIAL INTELLIGENCE</li>
                <li>GRAPHICS</li>
                <li>PUBLICATIONS</li>
                <li>VECTOR</li>
                <li>USER INTERFACE</li>
                <li>USER EXPERIENCE</li>
              </ul>
              <ul className='marquee-content' aria-hidden='true'>
                <li>WEBSITES</li>
                <li>PROTOTYPES</li>
                <li>KIOSK</li>
                <li>ARTIFICIAL INTELLIGENCE</li>
                <li>GRAPHICS</li>
                <li>PUBLICATIONS</li>
                <li>VECTOR</li>
                <li>USER INTERFACE</li>
                <li>USER EXPERIENCE</li>
              </ul>
              <ul className='marquee-content' aria-hidden='true'>
                <li>WEBSITES</li>
                <li>PROTOTYPES</li>
                <li>KIOSK</li>
                <li>ARTIFICIAL INTELLIGENCE</li>
                <li>GRAPHICS</li>
                <li>PUBLICATIONS</li>
                <li>VECTOR</li>
                <li>USER INTERFACE</li>
                <li>USER EXPERIENCE</li>
              </ul>
              <ul className='marquee-content' aria-hidden='true'>
                <li>WEBSITES</li>
                <li>PROTOTYPES</li>
                <li>KIOSK</li>
                <li>ARTIFICIAL INTELLIGENCE</li>
                <li>GRAPHICS</li>
                <li>PUBLICATIONS</li>
                <li>VECTOR</li>
                <li>USER INTERFACE</li>
                <li>USER EXPERIENCE</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className='project-content'>
        <div className='project-content-container'>

          <div className='project-grid'>
            <ProjectCard
              title="K-Wise"
              category="AI System"
              date="Nov 2025"
              status="In progress"
              categoryColor="#66EECC"
              svgSrc={kwiseSkeleton}
              onClick={() => console.log('K-Wise clicked')}
              className={hasAnimated ? 'animate-enter' : ''}
              style={{ animationDelay: '0.3s' }}
            />
            <ProjectCard
              title="Kitsune"
              category="Prototype"
              date="Sept 2025"
              status="Completed"
              categoryColor="#FF6B6B"
              svgSrc={kitsuneSkeleton}
              onClick={() => console.log('Kitsune clicked')}
              className={hasAnimated ? 'animate-enter' : ''}
              style={{ animationDelay: '0.4s' }}
            />
            <ProjectCard
              title="HUBITS"
              category="Management System"
              date="In progress"
              status="In progress"
              categoryColor="#4ECDC4"
              onClick={() => console.log('HUBITS clicked')}
              className={hasAnimated ? 'animate-enter' : ''}
              style={{ animationDelay: '0.5s' }}
            />
            <ProjectCard
              title="ITS Explorer"
              category="Website"
              date="In progress"
              status="In progress"
              categoryColor="#FFD93D"
              onClick={() => console.log('ITS Explorer clicked')}
              className={hasAnimated ? 'animate-enter' : ''}
              style={{ animationDelay: '0.6s' }}
            />
            <ProjectCard
              title="PC Wise - PC Builder"
              category="Website"
              date="Coming soon..."
              status="Coming soon"
              categoryColor="#FFD93D"
              onClick={() => console.log('PC Wise clicked')}
              className={hasAnimated ? 'animate-enter' : ''}
              style={{ animationDelay: '0.7s' }}
            />
          </div>
          <SeeMoreButton 
            onClick={() => console.log('See more projects clicked')}
            className={hasAnimated ? 'animate-enter' : ''}
            style={{ animationDelay: '0.8s' }}
          />
        </div>
      </div>

    </section>
  )

}

export default Project;

