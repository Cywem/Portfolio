import './ProjectCard.css';

const ProjectCard = ({ 
  title, 
  category, 
  date, 
  status,
  description,
  categoryColor,
  onClick,
  svgSrc,
  className = '',
  style = {}
}) => {
  return (
    <article 
      className={`project-card ${className}`}
      onClick={onClick}
      style={{ '--category-color': categoryColor, ...style }}
    >
      <div className="project-card-inner">
        {/* Display Section - Wireframe/Mockup */}
        <div className="project-card-visual">
          <div className='card-gradient'></div>
          {svgSrc ? (
            <img 
              src={svgSrc} 
              alt={`${title} preview`} 
              className="project-card-image"
            />
          ) : (
            <div className="wireframe-grid">
              <div className="wireframe-element large"></div>
              <div className="wireframe-row">
                <div className="wireframe-element small"></div>
                <div className="wireframe-element small"></div>
                <div className="wireframe-element small"></div>
              </div>
              <div className="wireframe-row">
                <div className="wireframe-element small"></div>
                <div className="wireframe-element small"></div>
                <div className="wireframe-element small"></div>
              </div>
            </div>
          )}
        </div>

        {/* Frame Section - Metadata */}
        <div className="project-card-info">
          <div className="project-card-meta">
            <span className="project-category">{category}</span>
            <span className="project-date">{date || status}</span>
          </div>
          <div className="project-title-wrapper">
            <h3 className="project-title">{title}</h3>
            <button className="project-card-arrow" aria-label={`View ${title} details`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </button>
          </div>
          {description && (
            <p className="project-description">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
