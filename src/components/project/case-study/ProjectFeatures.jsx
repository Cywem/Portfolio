import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';
import keyFeaturesImage from '../../../assets/images/case_study/kwise/keyFeatures.webp';

const ProjectFeatures = ({ heading, intro, subheading, columns, items, image }) => {
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
        
        {/* New structured format */}
        {intro && (
          <p className={`features-intro ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
            {intro}
          </p>
        )}
        
        {subheading && (
          <h3 className={`features-subheading ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.15s' }}>
            {subheading}
          </h3>
        )}
        
        {columns && (
          <div className="features-columns">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="features-column">
                {column.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className={`feature-group ${hasAnimated ? 'animate-enter' : ''}`}
                    style={{ animationDelay: `${0.2 + colIndex * 0.15 + featureIndex * 0.1}s` }}
                  >
                    <h4 className="feature-title">
                      <span className="feature-number">{feature.number}.</span> {feature.title}
                    </h4>
                    <ul className="feature-list">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="feature-list-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        
        {/* Legacy format (backwards compatible) */}
        {items && !columns && (
          <ul className="features-list">
            {items.map((item, index) => (
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
        )}
        
        {image && (
          <div className={`features-image-container ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.8s' }}>
            <img src={keyFeaturesImage} alt="Key Features" className="features-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFeatures;
