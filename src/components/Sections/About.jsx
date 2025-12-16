import { useState, useEffect, useRef } from 'react';
import './about.css';

// Import certification/organization logos
import zuittLogo from '../../assets/images/logos/zuitt-logo.svg';
import dictLogo from '../../assets/images/logos/DCIT-logo.svg';
import creativeNationAcademyLogo from '../../assets/images/logos/creative-nation-logo.svg'; 
import itsLogo from '../../assets/images/logos/ITS-logo.svg';
import bknrLogo from '../../assets/images/logos/BKNR-logo.svg';
import dciLogo from '../../assets/images/logos/DCI-logo.svg';
import ovprepqaLogo from '../../assets/images/logos/OVPREPQA-logo.svg';
import acssLogo from '../../assets/images/logos/ACSS-logo.svg';

const About = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCert, setHoveredCert] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const certificationsRef = useRef(null);
  const leadershipRef = useRef(null);
  const awardsRef = useRef(null);

  // Certification data
  const certifications = [
    { id: 1, name: 'DTI Programs and Services and DICT Programs and Projects', organization: 'DICT', date: 'Sept 2023', category: 'technical', logo: dictLogo, url: '#' },
    { id: 2, name: 'Learning Adobe Captivate 2023 for Educators', organization: 'Creative Nation Academy', date: 'Sept 2023', category: 'technical', logo: creativeNationAcademyLogo, url: '#' },
    { id: 3, name: 'Deceptive, Unfair, and Unconscionable Sales Acts and Practices', organization: 'DICT', date: 'Sept 2023', category: 'technical', logo: dictLogo, url: '#' },
    { id: 4, name: 'AI: How the technology can be utilized responsibly and reliably as Human support', organization: 'DICT', date: 'Sept 2023', category: 'technical', logo: dictLogo, url: '#' },
    { id: 5, name: 'Beyond the Screen: Exploring the Dynamic Duo of Media Information and Technology', organization: 'DICT', date: 'Sept 2023', category: 'technical', logo: dictLogo, url: '#' },
    { id: 6, name: 'Coding Bootcamp Basic Web Development Workshops', organization: 'Zuitt', date: 'Sept 2023', category: 'technical', logo: zuittLogo, url: '#' },
    { id: 7, name: 'AI: Opening More Access to Economic Opportunities: A brief session and conversation', organization: 'DICT', date: 'Sept 2023', category: 'technical', logo: dictLogo, url: '#' },
    { id: 8, name: 'FIGMAgination: Where Art Meets The Algorithm', organization: 'Information Technology Society', date: 'Nov 2025', category: 'technical', logo: itsLogo, url: '#' },
    { id: 9, name: 'WebDev Basics: A Web Development Workshop', organization: 'ACSS', date: 'Nov 2025', category: 'technical', logo: acssLogo, url: '#' },
    { id: 10, name: 'TechnoExpo 2025: Empowering Communities. Elevate Industries. Exhibit Innovation', organization: 'CCC-OVPREPQA', date: 'Nov 2025', category: 'technical', logo: ovprepqaLogo, url: '#' },
  ];

  // Leadership background data
  const affiliations = [
    {
      organization: 'INFORMATION TECHNOLOGY SOCIETY',
      period: '2022-2025',
      roles: ['Publishing Committee', 'Publishing Head', 'President'],
      logo: itsLogo
    },
    {
      organization: 'DEPARTMENT OF COMPUTING AND INFORMATICS',
      period: 'JAN, 2024 - NOV, 2025',
      roles: ['Capstone Coordinator'],
      logo: dciLogo
    },
    {
      organization: 'BKNR - CCC',
      period: '2023-2024',
      roles: ['Public Image Director'],
      logo: bknrLogo
    }
  ];

  // Awards data
  const awards = [
    { title: 'Excellence in Innovation', category: 'Innovation', organization: 'TechnoExpo', date: 'Dec 2025', logo: ovprepqaLogo },
    { title: 'Best Presenter', category: 'Presenter', organization: 'TechnoExpo', date: 'Dec 2025', logo: ovprepqaLogo },
    { title: 'Top 1 Officer', category: 'Leadership', organization: 'Information Technology Society', period: '2023-2024', logo: itsLogo },
    { title: 'Top 3 Officer', category: 'Leadership', organization: 'BKNR - CCC Chapter', period: '2023-2024', logo: bknrLogo },
    { title: 'Top 3 Officer', category: 'Leadership', organization: 'Information Technology Society', period: '2022-2023', logo: itsLogo }
  ];

  // Scroll tracking for active tab
  useEffect(() => {
    const handleScroll = () => {
      const certTop = certificationsRef.current?.offsetTop || 0;
      const leaderTop = leadershipRef.current?.offsetTop || 0;
      const awardsTop = awardsRef.current?.offsetTop || 0;
      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (scrollPos >= awardsTop) {
        setActiveTab('awards');
      } else if (scrollPos >= leaderTop) {
        setActiveTab('leadership');
      } else if (scrollPos >= certTop) {
        setActiveTab('certifications');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for hover label
  const handleMouseMove = (e, certId) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setHoveredCert(certId);
  };

  const handleMouseLeave = () => {
    setHoveredCert(null);
  };

  // Smooth scroll to section
  const scrollToSection = (ref, tab) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTab(tab);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* LEFT COLUMN - FIXED NAVIGATION */}
        <div className="about-left">
          <div className="about-header">
            <h2 className="about-title">
              <span className="title-more">MORE ABOUT</span>{' '}
              <span className="title-kc">KC</span>
            </h2>
            <p className="about-description">
              It's not just about code. I've led teams, organized events, and continuously grown through certifications, recognitions, and awards.
            </p>
          </div>

          <nav className="about-nav">
            <button 
              className={`nav-tab ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => scrollToSection(certificationsRef, 'certifications')}
            >
              <span className="tab-indicator"></span>
              Certifications
            </button>
            <button 
              className={`nav-tab ${activeTab === 'leadership' ? 'active' : ''}`}
              onClick={() => scrollToSection(leadershipRef, 'leadership')}
            >
              <span className="tab-indicator"></span>
              Leadership Background
            </button>
            <button 
              className={`nav-tab ${activeTab === 'awards' ? 'active' : ''}`}
              onClick={() => scrollToSection(awardsRef, 'awards')}
            >
              <span className="tab-indicator"></span>
              Awards
            </button>
          </nav>
        </div>

        {/* RIGHT COLUMN - SCROLLABLE CONTENT */}
        <div className="about-right">
          
          {/* CERTIFICATIONS SECTION */}
          <div className="content-section" ref={certificationsRef}>
            <div className="filter-group">
              <button 
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'technical' ? 'active' : ''}`}
                onClick={() => setActiveFilter('technical')}
              >
                Technical
              </button>
              <button 
                className={`filter-btn ${activeFilter === 'leadership' ? 'active' : ''}`}
                onClick={() => setActiveFilter('leadership')}
              >
                Leadership & Professional Development
              </button>
            </div>

            <div className="cert-grid">
              {/* Column 1: Spacer + 3 certs */}
              <div className="cert-column">
                <div className="cert-spacer"></div>
                {certifications.slice(0, 3).map(cert => {
                  const isVisible = activeFilter === 'all' || cert.category === activeFilter;
                  return (
                    <a
                      key={cert.id}
                      href={isVisible ? cert.url : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cert-item ${!isVisible ? 'filtered-out' : ''}`}
                      onMouseMove={isVisible ? (e) => handleMouseMove(e, cert.id) : undefined}
                      onMouseLeave={isVisible ? handleMouseLeave : undefined}
                      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                    >
                      {cert.logo && isVisible && (
                        <img src={cert.logo} alt={cert.organization} className="cert-logo" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Column 2: 4 certs */}
              <div className="cert-column">
                {[...Array(4)].map((_, index) => {
                  const cert = certifications[3 + index];
                  if (!cert) {
                    return <div key={`placeholder-col2-${index}`} className="cert-item"></div>;
                  }
                  const isVisible = activeFilter === 'all' || cert.category === activeFilter;
                  return (
                    <a
                      key={cert.id}
                      href={isVisible ? cert.url : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cert-item ${!isVisible ? 'filtered-out' : ''}`}
                      onMouseMove={isVisible ? (e) => handleMouseMove(e, cert.id) : undefined}
                      onMouseLeave={isVisible ? handleMouseLeave : undefined}
                      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                    >
                      {cert.logo && isVisible && (
                        <img src={cert.logo} alt={cert.organization} className="cert-logo" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Column 3: Spacer + 3 certs */}
              <div className="cert-column">
                <div className="cert-spacer"></div>
                {[...Array(3)].map((_, index) => {
                  const cert = certifications[7 + index];
                  if (!cert) {
                    return <div key={`col3-placeholder-${index}`} className="cert-item"></div>;
                  }
                  const isVisible = activeFilter === 'all' || cert.category === activeFilter;
                  return (
                    <a
                      key={cert.id}
                      href={isVisible ? cert.url : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cert-item ${!isVisible ? 'filtered-out' : ''}`}
                      onMouseMove={isVisible ? (e) => handleMouseMove(e, cert.id) : undefined}
                      onMouseLeave={isVisible ? handleMouseLeave : undefined}
                      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                    >
                      {cert.logo && isVisible && (
                        <img src={cert.logo} alt={cert.organization} className="cert-logo" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Column 4: 4 certs */}
              <div className="cert-column">
                {[...Array(4)].map((_, index) => {
                  const cert = certifications[10 + index];
                  if (!cert) {
                    return <div key={`col4-placeholder-${index}`} className="cert-item"></div>;
                  }
                  const isVisible = activeFilter === 'all' || cert.category === activeFilter;
                  return (
                    <a
                      key={cert.id}
                      href={isVisible ? cert.url : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cert-item ${!isVisible ? 'filtered-out' : ''}`}
                      onMouseMove={isVisible ? (e) => handleMouseMove(e, cert.id) : undefined}
                      onMouseLeave={isVisible ? handleMouseLeave : undefined}
                      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                    >
                      {cert.logo && isVisible && (
                        <img src={cert.logo} alt={cert.organization} className="cert-logo" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Column 5: Spacer + 3 certs */}
              <div className="cert-column">
                <div className="cert-spacer"></div>
                {[...Array(3)].map((_, index) => (
                  <div key={`col5-placeholder-${index}`} className="cert-item"></div>
                ))}
              </div>

              {/* Column 6: 4 certs */}
              <div className="cert-column">
                {[...Array(4)].map((_, index) => (
                  <div key={`col6-placeholder-${index}`} className="cert-item"></div>
                ))}
              </div>

              {/* Column 7: Spacer + 3 certs */}
              <div className="cert-column">
                <div className="cert-spacer"></div>
                {[...Array(3)].map((_, index) => (
                  <div key={`col7-placeholder-${index}`} className="cert-item"></div>
                ))}
              </div>
            </div>

            {/* Hover label */}
            {hoveredCert && (
              <div 
                className="cert-label"
                style={{
                  left: `${mousePosition.x + 20}px`,
                  top: `${mousePosition.y + 20}px`
                }}
              >
                {certifications.find(c => c.id === hoveredCert)?.name}
                <br />
                <span className="cert-label-date">
                  {certifications.find(c => c.id === hoveredCert)?.date}
                </span>
              </div>
            )}
          </div>

          {/* LEADERSHIP BACKGROUND SECTION */}
          <div className="content-section" ref={leadershipRef}>
            <h3 className="section-heading">AFFILIATIONS</h3>
            
            <div className="affiliation-list">
              {affiliations.map((aff, index) => (
                <div key={index} className="affiliation-item">
                  <div className="affiliation-logo">
                    <img src={aff.logo} alt={aff.organization} />
                  </div>
                  <div className="affiliation-content">
                    <h4 className="affiliation-org">{aff.organization}</h4>
                    <p className="affiliation-period">{aff.period}</p>
                    <div className="affiliation-roles">
                      {aff.roles.map((role, idx) => (
                        <span key={idx} className="role-badge">{role}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AWARDS SECTION */}
          <div className="content-section" ref={awardsRef}>
            <h3 className="section-heading">AWARDS & RECOGNITIONS</h3>
            
            <div className="awards-list">
              {awards.map((award, index) => (
                <div key={index} className="award-item">
                  <div className="award-icon">
                    <img src={award.logo} alt={award.organization} />
                  </div>
                  <div className="award-content">
                    <span className="award-category">{award.category}</span>
                    <h4 className="award-title">{award.title}</h4>
                    <p className="award-org">
                      {award.organization}, {award.date || award.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;