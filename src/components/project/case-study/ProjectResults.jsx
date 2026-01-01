import './projectCaseStudy.css';

const ProjectResults = ({ heading, intro, sections, items }) => {
  return (
    <div className="case-study-results">
      <div className="case-study-results-container">
        <div className="results-inner-wrapper">
          {heading && (
            <h2 className="results-heading">
              {heading}
            </h2>
          )}
          
          {/* Structured format */}
          {intro && (
            <p className="results-intro">
              {intro}
            </p>
          )}
          
          {sections && sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="results-section">
              <h3 className="results-section-title">
                <span className="section-number">{section.number}.</span> {section.title}
              </h3>
              <div className="results-items">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="result-group"
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
                  className="result-item"
                >
                  <span className="result-bullet">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectResults;
