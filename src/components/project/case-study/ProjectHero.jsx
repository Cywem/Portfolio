import { useEffect, useState } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectHero = ({ image }) => {
  const [hasAnimated, setHasAnimated] = useState(() => animationRegistry.caseStudyHero);

  useEffect(() => {
    if (hasAnimated) return;

    requestAnimationFrame(() => {
      setHasAnimated(true);
      animationRegistry.caseStudyHero = true;
    });
  }, [hasAnimated]);

  return (
    <div className="case-study-hero">
      <div className="case-study-hero-container">
        {image && (
          <img 
            src={image} 
            alt="Project hero" 
            className={`hero-image ${hasAnimated ? 'animate-enter' : ''}`}
          />
        )}
      </div> 
    </div>
  );
};

export default ProjectHero;
