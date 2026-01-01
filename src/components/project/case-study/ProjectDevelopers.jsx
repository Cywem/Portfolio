import './projectCaseStudy.css';

const ProjectDevelopers = ({ team }) => {
  return (
    <div className="case-study-developers">
      <div className="case-study-developers-container">
        <div className="developers-grid">
          {team && team.map((member, index) => (
            <div 
              key={index} 
              className="developer-item"
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
