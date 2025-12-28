import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectContent = ({ heading, text }) => {
  const key = `caseStudyContent_${heading}`;
  const [hasAnimated, setHasAnimated] = useState(() => animationRegistry[key]);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRegistry[key]) {
            requestAnimationFrame(() => {
              setHasAnimated(true);
              animationRegistry[key] = true;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const ref = contentRef.current;
    if (ref && !animationRegistry[key]) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [heading, key]);

  return (
    <div className="case-study-content" ref={contentRef}>
      <div className="case-study-content-container">
        {heading && (
          <h2 className={`content-heading ${hasAnimated ? 'animate-enter' : ''}`}>
            {heading}
          </h2>
        )}
        <p className={`content-text ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProjectContent;
