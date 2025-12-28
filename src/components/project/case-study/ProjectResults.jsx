import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectResults = ({ heading, items }) => {
  const [hasAnimated, setHasAnimated] = useState(() => animationRegistry.caseStudyResults);
  const resultsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRegistry.caseStudyResults) {
            requestAnimationFrame(() => {
              setHasAnimated(true);
              animationRegistry.caseStudyResults = true;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const ref = resultsRef.current;
    if (ref && !animationRegistry.caseStudyResults) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div className="case-study-results" ref={resultsRef}>
      <div className="case-study-results-container">
        {heading && (
          <h2 className={`results-heading ${hasAnimated ? 'animate-enter' : ''}`}>
            {heading}
          </h2>
        )}
        <ul className="results-list">
          {items && items.map((item, index) => (
            <li 
              key={index} 
              className={`result-item ${hasAnimated ? 'animate-enter' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <span className="result-bullet">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectResults;
