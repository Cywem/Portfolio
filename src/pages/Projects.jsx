import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/UI/ProjectCard';
import DecryptedText from '../components/UI/DecryptedText';
import kwiseSkeleton from '../assets/images/kwise_skeleton.svg';
import kitsuneSkeleton from '../assets/images/kitsune_skeleton.svg';
import Footer from '../components/Sections/Footer';
import './projects.css';

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after mount with RAF to avoid cascading renders
    requestAnimationFrame(() => {
      setHasAnimated(true);
    });
  }, []);

  // All your projects data
  const allProjects = [
    {
      title: "K-Wise",
      category: "AI System",
      date: "Nov 2025",
      description: "The K-WISE kiosk system addressed slow, manual in-store assistance and frequent compatibility questions during PC builds.",
      categoryColor: "#66EECC",
      svgSrc: kwiseSkeleton,
    },
    {
      title: "Kitsune",
      category: "Prototype",
      date: "Sept 2025",
      description: "A modern e-commerce prototype for anime merchandise, focusing on clean UI and seamless user experience.",
      categoryColor: "#FF6B6B",
      svgSrc: kitsuneSkeleton,
    },
    {
      title: "HUBITS",
      category: "Management System",
      date: "In progress",
      description: "HUBITS centralizes ITS admin by streamlining data, users, finances, documents, and reports with integrated AI tools.",
      categoryColor: "#4ECDC4",
    },
    {
      title: "ITS Explorer",
      category: "Website",
      date: "In progress",
      description: "An interactive web platform showcasing ITS facilities, services, and campus information for students and visitors.",
      categoryColor: "#FFD93D",
    },
    {
      title: "PC Wise - PC Builder",
      category: "Website",
      date: "Coming soon...",
      description: "An intelligent PC building tool that helps users select compatible components and build their perfect computer system.",
      categoryColor: "#FFD93D",
    },
  ];

  return (
    <>
      <section className="projects-page" id="all-projects">
        <div className="projects-page-header">
          <div className="projects-page-header-container">
            <div className="header-divider"></div>
            <div className="header-title-container">
              <Link to="/" className="back-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="#F4F2E7" strokeWidth="2" strokeLinecap="square"/>
                </svg>
                <span>Back to Home</span>
              </Link>
              <h1 className={`page-title ${hasAnimated ? 'animate-enter' : ''}`}>
                ALL PROJECTS
              </h1>
              <p className={`page-subtitle ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
                {hasAnimated && <DecryptedText text="Complete collection of my work" speed={35} maxIterations={10} sequential={true} animateOn="view" />}
                {!hasAnimated && "Complete collection of my work"}
              </p>
            </div>
          </div>
        </div>

        <div className="projects-page-content">
          <div className="projects-page-content-container">
            <div className="projects-page-grid">
              {allProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  category={project.category}
                  date={project.date}
                  description={project.description}
                  categoryColor={project.categoryColor}
                  svgSrc={project.svgSrc}
                  onClick={() => console.log(`${project.title} clicked`)}
                  className={hasAnimated ? 'animate-enter' : ''}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;