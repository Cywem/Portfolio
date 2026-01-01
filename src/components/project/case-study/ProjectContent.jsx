import './projectCaseStudy.css';

const ProjectContent = ({ heading, text, intro, sections }) => {
  return (
    <div className="case-study-content">
      <div className="case-study-content-container">
        <div className="content-inner-wrapper">
          {heading && (
            <h2 className="content-heading">
              {heading}
            </h2>
          )}
          
          {/* Simple text format (for backwards compatibility) */}
          {text && (
            <p className="content-text">
              {text}
            </p>
          )}
          
          {/* Structured content format */}
          {intro && (
            <p className="content-intro">
              {intro}
            </p>
          )}
          
          {sections && sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="content-section">
              {section.subheading && (
                <h3 className="content-subheading">
                  {section.subheading}
                </h3>
              )}
              {section.items && (
                <ul className="content-list">
                  {section.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="content-list-item"
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
    </div>
  );
};

export default ProjectContent;
