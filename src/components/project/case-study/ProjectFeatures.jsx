import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectFeatures = ({ heading, items }) => {
  const [hasAnimated, setHasAnimated] = useState(() => animationRegistry.caseStudyFeatures);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRegistry.caseStudyFeatures) {
            requestAnimationFrame(() => {
              setHasAnimated(true);
              animationRegistry.caseStudyFeatures = true;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const ref = featuresRef.current;
    if (ref && !animationRegistry.caseStudyFeatures) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div className="case-study-features" ref={featuresRef}>
      <div className="case-study-features-container">
        {heading && (
          <h2 className={`features-heading ${hasAnimated ? 'animate-enter' : ''}`}>
            {heading}
          </h2>
        )}
        <ul className="features-list">
          {items && items.map((item, index) => (
            <li 
              key={index} 
              className={`feature-item ${hasAnimated ? 'animate-enter' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <span className="feature-bullet">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectFeatures;
