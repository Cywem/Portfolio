import { useEffect, useState, useRef } from 'react';
import { animationRegistry } from '../../../state/animationRegistry';
import './projectCaseStudy.css';

const ProjectGallery = ({ images }) => {
  const [hasAnimated, setHasAnimated] = useState(() => animationRegistry.caseStudyGallery);
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationRegistry.caseStudyGallery) {
            requestAnimationFrame(() => {
              setHasAnimated(true);
              animationRegistry.caseStudyGallery = true;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    const ref = galleryRef.current;
    if (ref && !animationRegistry.caseStudyGallery) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div className="case-study-gallery" ref={galleryRef}>
      <div className="case-study-gallery-container">
        <div className="gallery-grid">
          {images && images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Gallery image ${index + 1}`}
              className={`gallery-image ${hasAnimated ? 'animate-enter' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
