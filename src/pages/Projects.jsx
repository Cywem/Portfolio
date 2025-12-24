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
          <div className='header-container'>
            <div className="title-container">
              <Link to="/" className="back-button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8H1M1 8L8 1M1 8L8 15" stroke="#F4F2E7" strokeWidth="2" strokeLinecap="square"/>
                </svg>
                <span>Back to Home</span>
              </Link>
              <h1 className={`page-title ${hasAnimated ? 'animate-enter' : ''}`}>
                MY PROJECTS
              </h1>
              <p className={`page-subtitle ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
                {hasAnimated && <DecryptedText text="These are things I built with curiosity, intention, and care. Each project reflects what I enjoyed working on and learning from." speed={35} maxIterations={10} sequential={true} animateOn="view" />}
                {!hasAnimated && "These are things I built with curiosity, intention, and care. Each project reflects what I enjoyed working on and learning from."}
              </p>
          </div>

          </div>
        </div>

        <div className='category-content'>
          <div className='category-label'>
            <p>CATEGORIES</p>

          </div>
          <div className='category-container'>
            
          </div>

        </div>


        
        <div className='search-bar-content'>
          <div className='search-bar-container'>
            <div className="search-bar">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M21.25 21.25L16.4245 16.4245M16.4245 16.4245C17.2499 15.5991 17.9047 14.6192 18.3514 13.5407C18.7981 12.4622 19.028 11.3063 19.028 10.139C19.028 8.97169 18.7981 7.8158 18.3514 6.73734C17.9047 5.65887 17.2499 4.67895 16.4245 3.85353C15.5991 3.02811 14.6192 2.37335 13.5407 1.92664C12.4622 1.47992 11.3063 1.25 10.139 1.25C8.97169 1.25 7.8158 1.47992 6.73734 1.92664C5.65887 2.37335 4.67895 3.02811 3.85353 3.85353C2.18652 5.52055 1.25 7.7815 1.25 10.139C1.25 12.4965 2.18652 14.7575 3.85353 16.4245C5.52055 18.0915 7.7815 19.028 10.139 19.028C12.4965 19.028 14.7575 18.0915 16.4245 16.4245Z" stroke="#84837F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <input type="text" placeholder='Search projects'/>
            </div>
            
            <button className='filter-button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M0 1.2C0 0.88174 0.126428 0.576515 0.351472 0.351472C0.576516 0.126428 0.88174 0 1.2 0H18.8C19.1183 0 19.4235 0.126428 19.6485 0.351472C19.8736 0.576515 20 0.88174 20 1.2C20 1.51826 19.8736 1.82348 19.6485 2.04853C19.4235 2.27357 19.1183 2.4 18.8 2.4H1.2C0.88174 2.4 0.576516 2.27357 0.351472 2.04853C0.126428 1.82348 0 1.51826 0 1.2ZM3.2 7.6C3.2 7.28174 3.32643 6.97652 3.55147 6.75147C3.77652 6.52643 4.08174 6.4 4.4 6.4H15.6C15.9183 6.4 16.2235 6.52643 16.4485 6.75147C16.6736 6.97652 16.8 7.28174 16.8 7.6C16.8 7.91826 16.6736 8.22348 16.4485 8.44853C16.2235 8.67357 15.9183 8.8 15.6 8.8H4.4C4.08174 8.8 3.77652 8.67357 3.55147 8.44853C3.32643 8.22348 3.2 7.91826 3.2 7.6ZM6.4 14C6.4 13.6817 6.52643 13.3765 6.75147 13.1515C6.97652 12.9264 7.28174 12.8 7.6 12.8H12.4C12.7183 12.8 13.0235 12.9264 13.2485 13.1515C13.4736 13.3765 13.6 13.6817 13.6 14C13.6 14.3183 13.4736 14.6235 13.2485 14.8485C13.0235 15.0736 12.7183 15.2 12.4 15.2H7.6C7.28174 15.2 6.97652 15.0736 6.75147 14.8485C6.52643 14.6235 6.4 14.3183 6.4 14Z" fill="#84837F"/>
              </svg>
            </button>

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