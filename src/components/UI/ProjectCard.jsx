import './ProjectCard.css';

const ProjectCard = ({ 
  title, 
  category, 
  date, 
  status,
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
        {/* SVG/Vector Visual */}
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

        {/* Project Info */}
        <div className="project-card-info">
          <div className="project-card-meta">
            <span className="project-category">{category}</span>
            {/* Show date if available, otherwise show status */}
            <span className="project-date">{date || status}</span>
          </div>
          <div className="project-title-wrapper">
            <h3 className="project-title">{title}</h3>
            {/* Arrow button - appears on hover next to title */}
            <button className="project-card-arrow" aria-label={`View ${title} details`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
