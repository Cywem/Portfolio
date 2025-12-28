import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/UI/ProjectCard';
import { projectsData } from '../data/projectsData';
import Footer from '../components/Sections/Footer';
import { animationRegistry } from '../state/animationRegistry';
import './projects.css';

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(animationRegistry.projectsPage);
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
    // Trigger animation only if not already played in this session
    if (animationRegistry.projectsPage) return;

    requestAnimationFrame(() => {
      setHasAnimated(true);
      animationRegistry.projectsPage = true;
    });
  }, []);

  // Filter and sort projects
  const getFilteredAndSortedProjects = () => {
    let filtered = projectsData;

    // Apply category filter
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => {
        // Check both category and status for filtering
        return project.category === activeFilter || project.status === activeFilter;
      });
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === 'latest') {
        return b.timestamp - a.timestamp;
      } else {
        return a.timestamp - b.timestamp;
      }
    });

    return sorted;
  };

  const filteredProjects = getFilteredAndSortedProjects();

  const handleSearchBarClick = () => {
    document.querySelector('.search-bar input')?.focus();
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Generate search suggestions
    if (query.trim()) {
      const suggestions = projectsData
        .filter(project =>
          project.title.toLowerCase().includes(query.toLowerCase())
        )
        .map(project => project.title)
        .slice(0, 5);
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSearchSuggestions([]);
  };

  return (
    <>
      <section className="projects-page" id="all-projects">
        <div className="projects-page-header">
          <div className='header-container'>
            <div className="title-container">
              <Link to="/" className="back-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M5.72781 0.320185L0.308893 5.73239C0.210225 5.83533 0.13288 5.95672 0.0812984 6.0896C-0.0270995 6.35313 -0.0270995 6.64872 0.0812984 6.91225C0.13288 7.04512 0.210225 7.16651 0.308893 7.26946L5.72781 12.6817C5.82886 12.7826 5.94883 12.8626 6.08086 12.9173C6.21288 12.9719 6.35439 13 6.4973 13C6.78591 13 7.06271 12.8855 7.26679 12.6817C7.47087 12.4778 7.58552 12.2014 7.58552 11.9131C7.58552 11.6249 7.47087 11.3484 7.26679 11.1446L3.6903 7.58336L11.9162 7.58336C12.2037 7.58336 12.4793 7.46932 12.6826 7.26632C12.8858 7.06333 13 6.788 13 6.50092C13 6.21384 12.8858 5.93852 12.6826 5.73552C12.4793 5.53252 12.2037 5.41848 11.9162 5.41848L3.6903 5.41848L7.26679 1.85725C7.36837 1.75662 7.44899 1.6369 7.50402 1.505C7.55904 1.37309 7.58737 1.23161 7.58737 1.08872C7.58737 0.945823 7.55904 0.804342 7.50402 0.672437C7.44899 0.540531 7.36837 0.420812 7.26679 0.320185C7.16603 0.21873 7.04617 0.138201 6.9141 0.0832472C6.78203 0.0282927 6.64037 0 6.4973 0C6.35423 0 6.21257 0.0282927 6.0805 0.0832472C5.94843 0.138201 5.82856 0.21873 5.72781 0.320185Z" 
                  fill="#84837F"/>
                </svg>
                <span>Back to Home</span>
              </Link>
              <h1 className={`page-title ${hasAnimated ? 'animate-enter' : ''}`}>
                MY PROJECTS
              </h1>
              <div className="page-subtitle-container">
                <p className={`page-subtitle ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
                  These are things I built with curiosity, intention, and care.
                </p>
                <p className={`page-subtitle ${hasAnimated ? 'animate-enter' : ''}`} style={{ animationDelay: '0.15s' }}>
                  Each project reflects what I enjoyed working on and learning from.
                </p>
              </div>
          </div>

          </div>
        </div>

        <div className='category-content'>
          <div className='category-label'>
            <p>CATEGORIES</p>
          </div>
          <div className='category-container'>
            <div className='filter-row'>
              <button 
                className={activeFilter === 'All' ? 'active' : ''}
                onClick={() => setActiveFilter('All')}
              >
                All
              </button>              
              <button 
                className={activeFilter === 'AI System' ? 'active' : ''}
                onClick={() => setActiveFilter('AI System')}
              >
                AI System
              </button>
              <button 
                className={activeFilter === 'Website' ? 'active' : ''}
                onClick={() => setActiveFilter('Website')}
              >
                Website
              </button>
              <button 
                className={activeFilter === 'Prototype' ? 'active' : ''}
                onClick={() => setActiveFilter('Prototype')}
              >
                Prototype
              </button>
              <button 
                className={activeFilter === 'Management System' ? 'active' : ''}
                onClick={() => setActiveFilter('Management System')}
              >
                Management System
              </button>
            </div>
            <div className='filter-row'>
              <button 
                className={activeFilter === 'In progress' ? 'active' : ''}
                onClick={() => setActiveFilter('In progress')}
              >
                In progress
              </button>
              <button 
                className={activeFilter === 'Coming soon' ? 'active' : ''}
                onClick={() => setActiveFilter('Coming soon')}
              >
                Coming soon
              </button>
            </div>
          </div>

        </div>


        
        <div className='search-bar-content'>
          <div className='search-bar-container'>
            <div className="search-bar-wrapper">
              <div className="search-bar" onClick={handleSearchBarClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <path d="M21.25 21.25L16.4245 16.4245M16.4245 16.4245C17.2499 15.5991 17.9047 14.6192 18.3514 13.5407C18.7981 12.4622 19.028 11.3063 19.028 10.139C19.028 8.97169 18.7981 7.8158 18.3514 6.73734C17.9047 5.65887 17.2499 4.67895 16.4245 3.85353C15.5991 3.02811 14.6192 2.37335 13.5407 1.92664C12.4622 1.47992 11.3063 1.25 10.139 1.25C8.97169 1.25 7.8158 1.47992 6.73734 1.92664C5.65887 2.37335 4.67895 3.02811 3.85353 3.85353C2.18652 5.52055 1.25 7.7815 1.25 10.139C1.25 12.4965 2.18652 14.7575 3.85353 16.4245C5.52055 18.0915 7.7815 19.028 10.139 19.028C12.4965 19.028 14.7575 18.0915 16.4245 16.4245Z" stroke="#84837F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder='Search projects'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              {searchSuggestions.length > 0 && (
                <div className="search-suggestions">
                  {searchSuggestions.map((suggestion, index) => (
                    <div 
                      key={index}
                      className="search-suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              className='filter-button'
              onClick={() => setSortOrder(sortOrder === 'latest' ? 'oldest' : 'latest')}
              title={sortOrder === 'latest' ? 'Sort: Latest to Oldest' : 'Sort: Oldest to Latest'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M0 1.2C0 0.88174 0.126428 0.576515 0.351472 0.351472C0.576516 0.126428 0.88174 0 1.2 0H18.8C19.1183 0 19.4235 0.126428 19.6485 0.351472C19.8736 0.576515 20 0.88174 20 1.2C20 1.51826 19.8736 1.82348 19.6485 2.04853C19.4235 2.27357 19.1183 2.4 18.8 2.4H1.2C0.88174 2.4 0.576516 2.27357 0.351472 2.04853C0.126428 1.82348 0 1.51826 0 1.2ZM3.2 7.6C3.2 7.28174 3.32643 6.97652 3.55147 6.75147C3.77652 6.52643 4.08174 6.4 4.4 6.4H15.6C15.9183 6.4 16.2235 6.52643 16.4485 6.75147C16.6736 6.97652 16.8 7.28174 16.8 7.6C16.8 7.91826 16.6736 8.22348 16.4485 8.44853C16.2235 8.67357 15.9183 8.8 15.6 8.8H4.4C4.08174 8.8 3.77652 8.67357 3.55147 8.44853C3.32643 8.22348 3.2 7.91826 3.2 7.6ZM6.4 14C6.4 13.6817 6.52643 13.3765 6.75147 13.1515C6.97652 12.9264 7.28174 12.8 7.6 12.8H12.4C12.7183 12.8 13.0235 12.9264 13.2485 13.1515C13.4736 13.3765 13.6 13.6817 13.6 14C13.6 14.3183 13.4736 14.6235 13.2485 14.8485C13.0235 15.0736 12.7183 15.2 12.4 15.2H7.6C7.28174 15.2 6.97652 15.0736 6.75147 14.8485C6.52643 14.6235 6.4 14.3183 6.4 14Z" fill="#84837F"/>
              </svg>
            </button>

          </div>
        </div>

        <div className="projects-page-content">
          <div className="projects-page-content-container">
            <div className="projects-page-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug || project.title}
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  date={project.date}
                  description={project.description}
                  categoryColor={project.categoryColor}
                  svgSrc={project.svgSrc}
                  hasCaseStudy={project.hasCaseStudy}
                  from="projects"
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