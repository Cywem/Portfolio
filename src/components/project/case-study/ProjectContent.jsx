import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectContent = ({ heading, text, intro, sections }) => {
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
        
        {/* Simple text format (for backwards compatibility) */}
        {text && (
          <p className={`content-text ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
            {text}
          </p>
        )}
        
        {/* Structured content format */}
        {intro && (
          <p className={`content-intro ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
            {intro}
          </p>
        )}
        
        {sections && sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="content-section">
            {section.subheading && (
              <h3 className={`content-subheading ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: `${0.2 + sectionIndex * 0.1}s` }}>
                {section.subheading}
              </h3>
            )}
            {section.items && (
              <ul className="content-list">
                {section.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className={`content-list-item ${hasAnimated ? 'animate-enter' : ''}`}
                    style={{ animationDelay: `${0.3 + sectionIndex * 0.1 + itemIndex * 0.05}s` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
