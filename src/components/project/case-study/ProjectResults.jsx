import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectResults = ({ heading, intro, sections, items }) => {
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
        
        {/* Structured format */}
        {intro && (
          <p className={`results-intro ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
            {intro}
          </p>
        )}
        
        {sections && sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="results-section">
            <h3 className={`results-section-title ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: `${0.2 + sectionIndex * 0.1}s` }}>
              <span className="section-number">{section.number}.</span> {section.title}
            </h3>
            <div className="results-items">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className={`result-group ${hasAnimated ? 'animate-enter' : ''}`}
                  style={{ animationDelay: `${0.3 + sectionIndex * 0.1 + itemIndex * 0.05}s` }}
                >
                  <p className="result-label">{item.label}</p>
                  <ul className="result-details-list">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="result-detail">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Legacy format (backwards compatible) */}
        {items && !sections && (
          <ul className="results-list">
            {items.map((item, index) => (
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
        )}
      </div>
    </div>
  );
};

export default ProjectResults;
