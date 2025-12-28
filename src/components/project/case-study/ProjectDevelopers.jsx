import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectDevelopers = ({ team }) => {
  const [hasAnimated, setHasAnimated] = useState(() => animationRegistry.caseStudyDevelopers);
  const developersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRegistry.caseStudyDevelopers) {
            requestAnimationFrame(() => {
              setHasAnimated(true);
              animationRegistry.caseStudyDevelopers = true;
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const ref = developersRef.current;
    if (ref && !animationRegistry.caseStudyDevelopers) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div className="case-study-developers" ref={developersRef}>
      <div className="case-study-developers-container">
        <div className="developers-grid">
          {team && team.map((member, index) => (
            <div 
              key={index} 
              className={`developer-item ${hasAnimated ? 'animate-enter' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <p className="developer-name">{member.name}</p>
              <p className="developer-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDevelopers;
