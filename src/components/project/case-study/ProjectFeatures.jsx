import './projectCaseStudy.css';
import keyFeaturesImage from '../../../assets/images/case_study/kwise/keyFeatures.webp';

const ProjectFeatures = ({ heading, intro, subheading, columns, items, image }) => {
  return (
    <div className="case-study-features">
      <div className="case-study-features-container">
        <div className="features-inner-wrapper">
          {heading && (
            <h2 className="features-heading">
              {heading}
            </h2>
          )}
          
          {/* New structured format */}
          {intro && (
            <p className="features-intro">
              {intro}
            </p>
          )}
          
          {subheading && (
            <h3 className="features-subheading">
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
                      className="feature-group"
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
                  className="feature-item"
                >
                  <span className="feature-bullet">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          
          {image && (
            <div className="features-image-container">
              <img src={keyFeaturesImage} alt="Key Features" className="features-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFeatures;
