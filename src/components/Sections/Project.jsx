import { useEffect, useRef, useState } from 'react';
import { saveHomeScroll } from '../../state/scrollMemory';
import './Project.css';
import ProjectCard from '../UI/ProjectCard';
import DecryptedText from '../UI/DecryptedText';
import SeeMoreButton from '../UI/SeeMoreButton';
import { projectsData } from '../../data/projectsData';
import { animationRegistry } from '../../state/animationRegistry';

const Project = () => {
  const marqueeTrackRef = useRef(null);
  const marqueeAnimationRef = useRef(null);
  const marqueePositionRef = useRef(0);
  const projectHeaderRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(animationRegistry.projectsIntro);

  // Intersection Observer for entrance animation
  useEffect(() => {
    // Skip if already animated in this session
    if (animationRegistry.projectsIntro) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRegistry.projectsIntro) {
            requestAnimationFrame(() => {
              setHasAnimated(true);
              animationRegistry.projectsIntro = true;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const headerRef = projectHeaderRef.current;
    if (headerRef) observer.observe(headerRef);

    return () => {
      if (headerRef) observer.unobserve(headerRef);
    };
  }, []);

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
    >

      <div className='project-header' ref={projectHeaderRef}>
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
            {projectsData.slice(0, 5).map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                date={project.date}
                status={project.status}
                description={project.description}
                categoryColor={project.categoryColor}
                svgSrc={project.svgSrc}
                onClick={() => console.log(`${project.title} clicked`)}
                className={hasAnimated ? 'animate-enter' : ''}
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              />
            ))}
          </div>
          <div className='see-more-button-container'>
            <SeeMoreButton 
              onClick={saveHomeScroll}
              to="/projects"
              className={hasAnimated ? 'animate-enter' : ''}
              style={{ animationDelay: '2s' }}
            />
          </div>
          
        </div>
      </div>

    </section>
  )

}

export default Project;

