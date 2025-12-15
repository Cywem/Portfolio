import { useState, useEffect, useRef } from 'react';
import './about.css';

// Import certification/organization logos
import zuittLogo from '../../assets/images/logos/zuitt-logo.svg';
import dcitLogo from '../../assets/images/logos/DCIT-logo.svg';
import itsLogo from '../../assets/images/logos/ITS-logo.svg';
import bknrLogo from '../../assets/images/logos/BKNR-logo.svg';

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
    { id: 1, name: 'Full Stack Development', organization: 'Zuitt', date: 'Dec 2025', category: 'technical', logo: zuittLogo, url: '#' },
    { id: 2, name: 'AWS Cloud Practitioner', organization: 'Amazon Web Services', date: 'Nov 2025', category: 'technical', logo: null, url: '#' },
    { id: 3, name: 'React Professional', organization: 'Meta', date: 'Oct 2025', category: 'technical', logo: null, url: '#' },
    { id: 4, name: 'Leadership Excellence', organization: 'Harvard', date: 'Sep 2025', category: 'leadership', logo: null, url: '#' },
    { id: 5, name: 'UI/UX Design', organization: 'Google', date: 'Aug 2025', category: 'technical', logo: null, url: '#' },
    { id: 6, name: 'Project Management', organization: 'PMI', date: 'Jul 2025', category: 'leadership', logo: null, url: '#' },
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
      period: '2024-2025',
      roles: ['Capstone Coordinator'],
      logo: dcitLogo
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
    { title: 'Excellence in Innovation', category: 'Innovation', organization: 'TechnoExpo', date: 'Dec 2025' },
    { title: 'Best Presenter', category: 'Presenter', organization: 'TechnoExpo', date: 'Dec 2025' },
    { title: 'Top 1 Officer', category: 'Leadership', organization: 'Information Technology Society', period: '2023-2024' },
    { title: 'Top 3 Officer', category: 'Leadership', organization: 'BKNR - CCC Chapter', period: '2023-2024' },
    { title: 'Top 3 Officer', category: 'Leadership', organization: 'Information Technology Society', period: '2022-2023' }
  ];

  // Filter certifications
  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

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
              {filteredCertifications.map(cert => (
                <a
                  key={cert.id}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-item"
                  onMouseMove={(e) => handleMouseMove(e, cert.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {cert.logo && (
                    <img src={cert.logo} alt={cert.organization} className="cert-logo" />
                  )}
                </a>
              ))}
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
                    <img src={dcitLogo} alt="Award" />
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