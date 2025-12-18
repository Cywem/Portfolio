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
import ariseLogo from '../../assets/images/logos/ARISE-logo.svg';
import psgLogo from '../../assets/images/logos/PSG-logo.svg';
import racLogo from '../../assets/images/logos/RAC-logo.svg';

const About = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCert, setHoveredCert] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isCertificationsVisible, setIsCertificationsVisible] = useState(false);
  const [isAffiliationsVisible, setIsAffiliationsVisible] = useState(false);
  const [isAwardsVisible, setIsAwardsVisible] = useState(false);

  const certificationsRef = useRef(null);
  const leadershipRef = useRef(null);
  const awardsRef = useRef(null);
  const certificationsContentRef = useRef(null);
  const affiliationsContentRef = useRef(null);
  const awardsContentRef = useRef(null);

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
      organization: 'BKNR - CCC Chapter',
      period: '2023-2024',
      roles: ['Public Image Director'],
      logo: bknrLogo
    },
    {
      organization: 'OTHER',
      period: '2023-2024',
      roles: ['Member'],
      logos: [ariseLogo, psgLogo, racLogo],
      isGroup: true
    }
  ];

  // Awards data
  const awards = [
    { title: 'Excellence in Innovation', category: 'Innovation', organization: 'OVPREPQA - TechnoExpo', date: 'Dec 2025', logo: ovprepqaLogo },
    { title: 'Best Presenter', category: 'Presenter', organization: 'OVPREPQA - TechnoExpo', date: 'Dec 2025', logo: ovprepqaLogo },
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

  // Scroll-triggered reveal animation for all content sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === certificationsContentRef.current && !isCertificationsVisible) {
              setIsCertificationsVisible(true);
            } else if (entry.target === affiliationsContentRef.current && !isAffiliationsVisible) {
              setIsAffiliationsVisible(true);
            } else if (entry.target === awardsContentRef.current && !isAwardsVisible) {
              setIsAwardsVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const certRef = certificationsContentRef.current;
    const affRef = affiliationsContentRef.current;
    const awardRef = awardsContentRef.current;

    if (certRef) observer.observe(certRef);
    if (affRef) observer.observe(affRef);
    if (awardRef) observer.observe(awardRef);

    return () => {
      if (certRef) observer.unobserve(certRef);
      if (affRef) observer.unobserve(affRef);
      if (awardRef) observer.unobserve(awardRef);
    };
  }, [isCertificationsVisible, isAffiliationsVisible, isAwardsVisible]);

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

        <div>
          <div className="vertical-divider"></div>
        </div>
        {/* RIGHT COLUMN - SCROLLABLE CONTENT */}
        <div className="about-right">
          
          {/* CERTIFICATIONS SECTION */}
          <div className="content-section" ref={certificationsRef}>
            <div 
              className={`cert-content ${isCertificationsVisible ? 'content-visible' : ''}`}
              ref={certificationsContentRef}
            >
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
          </div>

          {/* LEADERSHIP BACKGROUND SECTION */}
          <div className="content-section" ref={leadershipRef}>
            <h3 className="section-heading">AFFILIATIONS</h3>
            
            <div 
              className={`affiliation-list ${isAffiliationsVisible ? 'content-visible' : ''}`}
              ref={affiliationsContentRef}
            >
              {affiliations.slice(0, 2).map((aff, index) => (
                <div key={index} className="affiliation-item">
                  {aff.isGroup ? (
                    <div className="affiliation-logo-group">
                      {aff.logos.map((logo, logoIdx) => (
                        <div key={logoIdx} className="affiliation-logo-circle">
                          <img src={logo} alt={`${aff.organization} ${logoIdx + 1}`} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="affiliation-logo-circle">
                      <img src={aff.logo} alt={aff.organization} />
                    </div>
                  )}
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
              
              {/* BKNR-CCC and OTHER in a row */}
              <div className="affiliation-row">
                {affiliations.slice(2, 4).map((aff, index) => (
                  <div key={index + 2} className="affiliation-item">
                    {aff.isGroup ? (
                      <div className="affiliation-logo-group">
                        {/* Container for small logos (Arise & PSG) and large logo (RAC-CCC) */}
                        <div className="other-logos-container">
                          {/* Arise and PSG in column */}
                          <div className="small-logos-column">
                            <div className="affiliation-logo-small">
                              <img src={aff.logos[0]} alt="Arise" />
                            </div>
                            <div className="affiliation-logo-small">
                              <img src={aff.logos[1]} alt="PSG" />
                            </div>
                          </div>
                          {/* RAC-CCC larger logo */}
                          <div className="affiliation-logo-medium">
                            <img src={aff.logos[2]} alt="RAC-CCC" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="affiliation-logo-circle">
                        <img src={aff.logo} alt={aff.organization} />
                      </div>
                    )}
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
          </div>

          {/* AWARDS SECTION */}
          <div className="content-section" ref={awardsRef}>
            <div className="awards-header">
              <h3 className="section-heading awards-title">
                <span>AWARDS & RECOGNITIONS</span>
                <span></span>
              </h3>
            </div>
            
            <div 
              className={`awards-grid-container ${isAwardsVisible ? 'content-visible' : ''}`}
              ref={awardsContentRef}
            >
              {/* ROW 1: Two columns */}
              <div className="awards-grid-row">
                {/* Cell 1 - Excellence in Innovation */}
                <div className="awards-grid-cell cell-left">
                  <div className="award-card">
                    <div className="award-logo-container">
                      <img src={awards[0].logo} alt={awards[0].organization} />
                    </div>
                    <div className="award-badge">{awards[0].category.toUpperCase()}</div>
                    <div className="award-card-content">
                      <h4 className="award-card-title">{awards[0].title}</h4>
                      <div className="award-details">
                        <p className="award-org-name">{awards[0].organization}</p>
                        <p className="award-date">{awards[0].date}</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
                {/* Cell 2 - Best Presenter */}
                <div className="awards-grid-cell cell-right">
                  <div className="award-card">
                    <div className="award-logo-container">
                      <img src={awards[1].logo} alt={awards[1].organization} />
                    </div>
                    <div className="award-badge">{awards[1].category.toUpperCase()}</div>
                    <div className="award-card-content">
                      <h4 className="award-card-title">{awards[1].title}</h4>
                      <div className="award-details">
                        <p className="award-org-name">{awards[1].organization}</p>
                        <p className="award-date">{awards[1].date}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* ROW 2: Two columns */}
              <div className="awards-grid-row">
                {/* Cell 1 - Top 1 Officer */}
                <div className="awards-grid-cell cell-left">
                  <div className="award-card">
                    <div className="award-logo-container">
                      <img src={awards[2].logo} alt={awards[2].organization} />
                    </div>
                    <div className="award-badge">{awards[2].category.toUpperCase()}</div>
                    <div className="award-card-content">
                      <h4 className="award-card-title">{awards[2].title}</h4>
                      <div className="award-details">
                        <p className="award-org-name">{awards[2].organization}</p>
                        <p className="award-date">{awards[2].period}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Cell 2 - Top 3 Officer (BKNR) */}
                <div className="awards-grid-cell cell-right">
                  <div className="award-card">
                    <div className="award-logo-container">
                      <img src={awards[3].logo} alt={awards[3].organization} />
                    </div>
                    <div className="award-badge">{awards[3].category.toUpperCase()}</div>
                    <div className="award-card-content">
                      <h4 className="award-card-title">{awards[3].title}</h4>
                      <div className="award-details">
                        <p className="award-org-name">{awards[3].organization}</p>
                        <p className="award-date">{awards[3].period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 3: Full width */}
              <div className="awards-grid-row">
                {/* Cell - Top 3 Officer (ITS 2022-2023) */}
                <div className="awards-grid-cell cell-full">
                  <div className="award-card">
                    <div className="award-logo-container">
                      <img src={awards[4].logo} alt={awards[4].organization} />
                    </div>
                    <div className="award-badge">{awards[4].category.toUpperCase()}</div>
                    <div className="award-card-content">
                      <h4 className="award-card-title">{awards[4].title}</h4>
                      <div className="award-details">
                        <p className="award-org-name">{awards[4].organization}</p>
                        <p className="award-date">{awards[4].period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;