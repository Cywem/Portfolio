import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { projectCaseStudies } from '../data/projectCaseStudies';
import {
  ProjectHeader,
  ProjectHero,
  ProjectContent,
  ProjectFeatures,
  ProjectGallery,
  ProjectResults,
  ProjectDevelopers
} from '../components/project/case-study';
import Footer from '../components/Sections/Footer';
import './ProjectCaseStudy.css';

const SECTION_MAP = {
  header: ProjectHeader,
  hero: ProjectHero,
  content: ProjectContent,
  features: ProjectFeatures,
  gallery: ProjectGallery,
  results: ProjectResults,
  developers: ProjectDevelopers,
};

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const location = useLocation();
  
  const project = projectsData.find(p => p.slug === slug);
  const caseStudy = projectCaseStudies[slug];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  if (!project.hasCaseStudy || !caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  // Determine navigation source from location state
  const from = location.state?.from || 'projects';
  const backPath = from === 'home' ? '/' : '/projects';
  const backLabel = from === 'home' ? 'Back to Home' : 'Back to Projects';

  return (
    <>
      <section className="project-case-study">
        {caseStudy.sections.map((section, index) => {
          const SectionComponent = SECTION_MAP[section.type];
          
          // Pass additional props to ProjectHeader
          if (section.type === 'header') {
            return (
              <SectionComponent
                key={`${section.type}-${index}`}
                {...section}
                backPath={backPath}
                backLabel={backLabel}
                project={project}
              />
            );
          }
          
          if (!SectionComponent) {
            return null;
          }

          return (
            <SectionComponent
              key={`${section.type}-${index}`}
              {...section}
            />
          );
        })}
      </section>
      <Footer />
    </>
  );
};

export default ProjectCaseStudy;
