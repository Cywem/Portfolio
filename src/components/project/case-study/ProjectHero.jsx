import { useEffect, useState } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';
import heroImage from '../../../assets/images/case_study/kwise/header.webp';

const ProjectHero = () => {
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
        <div className="hero-decorations">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18 8.74227e-08V18H0L8.74224e-08 20H20V0L18 8.74227e-08Z" fill="#4C4C4A"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M20 18H2L2 0L0 8.74227e-08L8.74228e-07 20H20V18Z" fill="#4C4C4A"/>
          </svg>
        </div>
        <img 
          src={heroImage} 
          alt="Project hero" 
          className={`hero-image ${hasAnimated ? 'animate-enter' : ''}`}
        />
        <div className="hero-decorations">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M18 20V2L0 2L8.74224e-08 0L20 8.74228e-07V20H18Z" fill="#4C4C4A"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M20 2L2 2L2 20H0L8.74228e-07 0L20 8.74228e-07V2Z" fill="#4C4C4A"/>
          </svg>
        </div>
      </div> 
    </div>
  );
};

export default ProjectHero;
