import { useState, useEffect, useRef } from 'react';
import './about.css';
import DecryptedText from '../UI/DecryptedText';
import { certifications } from '../../data/certificationsData';

// Import organization logos for affiliations
import itsLogo from '../../assets/images/logos/ITS-logo.svg';
import bknrLogo from '../../assets/images/logos/BKNR-logo.svg';
import dciLogo from '../../assets/images/logos/DCI-logo.svg';
import ovprepqaLogo from '../../assets/images/logos/OVPREPQA-logo.svg';
import ariseLogo from '../../assets/images/logos/ARISE-logo.svg';
import psgLogo from '../../assets/images/logos/PSG-logo.svg';
import racLogo from '../../assets/images/logos/RAC-logo.svg';

const About = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCert, setHoveredCert] = useState(null);
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const [expandedCert, setExpandedCert] = useState(null);
  const [isCertificationsVisible, setIsCertificationsVisible] = useState(false);
  const [isAffiliationsVisible, setIsAffiliationsVisible] = useState(false);
  const [isAwardsVisible, setIsAwardsVisible] = useState(false);
  const [isAboutLeftVisible, setIsAboutLeftVisible] = useState(false);

  const certificationsRef = useRef(null);
  const leadershipRef = useRef(null);
  const awardsRef = useRef(null);
  const aboutLeftRef = useRef(null);
  const certificationsContentRef = useRef(null);
  const affiliationsContentRef = useRef(null);
  const awardsContentRef = useRef(null);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  // Filter and sort certifications
  const getFilteredAndSortedCertifications = () => {
    // Parse date strings to Date objects for sorting
    const parseDate = (dateStr) => {
      // Handle formats like "Nov 14 2025", "Sept 3 2023", "Aug 5 2023", "Dec 8 2023"
      const monthMap = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      const parts = dateStr.split(' ');
      const month = monthMap[parts[0]];
      const day = parseInt(parts[1]);
      const year = parseInt(parts[2]);
      return new Date(year, month, day);
    };

    // Filter based on active filter
    let filtered = certifications;
    if (activeFilter !== 'all') {
      filtered = certifications.filter(cert => cert.category === activeFilter);
    }

    // Sort by date (newest to oldest)
    return filtered.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA; // Descending order
    });
  };

  const filteredCertifications = getFilteredAndSortedCertifications();

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

  // Scroll-triggered reveal animation for about-left
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAboutLeftVisible) {
            setIsAboutLeftVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    const leftRef = aboutLeftRef.current;
    if (leftRef) observer.observe(leftRef);

    return () => {
      if (leftRef) observer.unobserve(leftRef);
    };
  }, [isAboutLeftVisible]);

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

  // Mouse tracking for hover overlay - follows cursor
  const updateOverlayPosition = (e) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const overlayWidth = 215; // 199px + 16px padding
    const overlayHeight = 165; // 141px + 24px padding
    const offset = 20; // Offset from cursor
    
    // Position to the right and below cursor by default
    let x = e.clientX + offset;
    let y = e.clientY + offset;
    
    // If overlay would go off right edge, position to the left of cursor
    if (x + overlayWidth > viewportWidth) {
      x = e.clientX - overlayWidth - offset;
    }
    
    // If overlay would go off bottom edge, position above cursor
    if (y + overlayHeight > viewportHeight) {
      y = e.clientY - overlayHeight - offset;
    }
    
    // Clamp to viewport edges
    if (x < 12) x = 12;
    if (y < 12) y = 12;
    if (x + overlayWidth > viewportWidth) x = viewportWidth - overlayWidth - 12;
    if (y + overlayHeight > viewportHeight) y = viewportHeight - overlayHeight - 12;
    
    setOverlayPosition({ x, y });
  };

  const handleCertMouseEnter = (e, certId) => {
    setHoveredCert(certId);
    updateOverlayPosition(e);
  };

  const handleCertMouseMove = (e) => {
    if (hoveredCert) {
      updateOverlayPosition(e);
    }
  };

  const handleCertMouseLeave = () => {
    setHoveredCert(null);
  };

  const handleOverlayMouseEnter = () => {
    // Keep overlay visible when hovering over it
  };

  const handleOverlayMouseLeave = () => {
    setHoveredCert(null);
  };

  const handleOverlayClick = (e, cert) => {
    e.stopPropagation();
    setExpandedCert(cert);
    setHoveredCert(null);
  };

  const handleBadgeClick = (e, cert) => {
    e.stopPropagation();
    setExpandedCert(cert);
  };

  const handleCloseModal = () => {
    setExpandedCert(null);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setExpandedCert(null);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (expandedCert) {
      // Simply hide overflow without padding compensation
      // The layout shift is prevented by ensuring scrollbar space is preserved in CSS
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedCert]);

  // Smooth scroll to section
  const scrollToSection = (ref, tab) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTab(tab);
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* LEFT COLUMN - FIXED NAVIGATION */}
        <div className="about-left" ref={aboutLeftRef}>
          <div className={`about-header ${isAboutLeftVisible ? 'animate-enter' : ''}`}>
            <h2 className="about-title">
              <span className="title-more">MORE ABOUT</span>{' '}
              <span className="title-kc">KC</span>
            </h2>
            <p className="about-description">
              It's not just about code. I've led teams, organized events, and continuously grown through certifications, recognitions, and awards.
            </p>
          </div>

          <nav className={`about-nav ${isAboutLeftVisible ? 'animate-enter' : ''}`} style={{ animationDelay: '0.1s' }}>
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
              {/* Column 1: Spacer + 3 certs (positions 0, 1, 2) */}
              <div className="cert-column">
                <div className="cert-spacer"></div>
                {[0, 1, 2].map(position => {
                  const cert = filteredCertifications[position];
                  const isVisible = cert !== undefined;
                  return (
                    <div
                      key={`col1-${position}`}
                      className={`cert-item ${isVisible ? 'has-content' : ''}`}
                      onMouseEnter={isVisible ? (e) => handleCertMouseEnter(e, cert.id) : undefined}
                      onMouseMove={isVisible ? handleCertMouseMove : undefined}
                      onMouseLeave={isVisible ? handleCertMouseLeave : undefined}
                      onClick={isVisible ? (e) => handleBadgeClick(e, cert) : undefined}
                    >
                      {cert && cert.logo && (
                        <img 
                          src={cert.logo} 
                          alt={cert.organization} 
                          className="cert-logo"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Column 2: 4 certs (positions 3, 4, 5, 6) */}
              <div className="cert-column">
                {[3, 4, 5, 6].map(position => {
                  const cert = filteredCertifications[position];
                  const isVisible = cert !== undefined;
                  return (
                    <div
                      key={`col2-${position}`}
                      className={`cert-item ${isVisible ? 'has-content' : ''}`}
                      onMouseEnter={isVisible ? (e) => handleCertMouseEnter(e, cert.id) : undefined}
                      onMouseMove={isVisible ? handleCertMouseMove : undefined}
                      onMouseLeave={isVisible ? handleCertMouseLeave : undefined}
                      onClick={isVisible ? (e) => handleBadgeClick(e, cert) : undefined}
                    >
                      {cert && cert.logo && (
                        <img 
                          src={cert.logo} 
                          alt={cert.organization} 
                          className="cert-logo"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Column 3: Spacer + 3 certs (positions 7, 8, 9) */}
              <div className="cert-column">
                <div className="cert-spacer"></div>
                {[7, 8, 9].map(position => {
                  const cert = filteredCertifications[position];
                  const isVisible = cert !== undefined;
                  return (
                    <div
                      key={`col3-${position}`}
                      className={`cert-item ${isVisible ? 'has-content' : ''}`}
                      onMouseEnter={isVisible ? (e) => handleCertMouseEnter(e, cert.id) : undefined}
                      onMouseMove={isVisible ? handleCertMouseMove : undefined}
                      onMouseLeave={isVisible ? handleCertMouseLeave : undefined}
                      onClick={isVisible ? (e) => handleBadgeClick(e, cert) : undefined}
                    >
                      {cert && cert.logo && (
                        <img 
                          src={cert.logo} 
                          alt={cert.organization} 
                          className="cert-logo"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Column 4: 4 certs (positions 10, 11, 12, 13) */}
              <div className="cert-column">
                {[10, 11, 12, 13].map(position => {
                  const cert = filteredCertifications[position];
                  const isVisible = cert !== undefined;
                  return (
                    <div
                      key={`col4-${position}`}
                      className={`cert-item ${isVisible ? 'has-content' : ''}`}
                      onMouseEnter={isVisible ? (e) => handleCertMouseEnter(e, cert.id) : undefined}
                      onMouseMove={isVisible ? handleCertMouseMove : undefined}
                      onMouseLeave={isVisible ? handleCertMouseLeave : undefined}
                      onClick={isVisible ? (e) => handleBadgeClick(e, cert) : undefined}
                    >
                      {cert && cert.logo && (
                        <img 
                          src={cert.logo} 
                          alt={cert.organization} 
                          className="cert-logo"
                        />
                      )}
                    </div>
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
            </div>
          </div>

          {/* LEADERSHIP BACKGROUND SECTION */}
          <div className="content-section" ref={leadershipRef}>
            <h3 className={`section-heading ${isAffiliationsVisible ? 'heading-visible' : ''}`}>
              {isAffiliationsVisible && <DecryptedText text="AFFILIATIONS" speed={30} maxIterations={10} sequential={true} animateOn="view" />}
              {!isAffiliationsVisible && "AFFILIATIONS"}
            </h3>
            
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
              <h3 className={`section-heading awards-title ${isAwardsVisible ? 'heading-visible' : ''}`}>
                <span>
                  {isAwardsVisible && <DecryptedText text="AWARDS & RECOGNITIONS" speed={30} maxIterations={10} sequential={true} animateOn="view" />}
                  {!isAwardsVisible && "AWARDS & RECOGNITIONS"}
                </span>
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

      {/* Certificate Hover Overlay - Rendered at section level for proper positioning */}
      {hoveredCert && (() => {
        const cert = certifications.find(c => c.id === hoveredCert);
        if (!cert) return null;
        
        // Truncate certificate name if too long (max 32 characters)
        const maxLength = 26;
        const truncatedName = cert.name.length > maxLength 
          ? cert.name.substring(0, maxLength) + '...' 
          : cert.name;
        
        return (
          <div 
            ref={overlayRef}
            className="cert-hover-overlay"
            style={{
              left: `${overlayPosition.x}px`,
              top: `${overlayPosition.y}px`
            }}
            onMouseEnter={handleOverlayMouseEnter}
            onMouseLeave={handleOverlayMouseLeave}
            onClick={(e) => handleOverlayClick(e, cert)}
          >
            <div className="cert-preview-image">
              <img src={cert.previewImage} alt={cert.name} />
            </div>
            <div className="cert-metadata-row">
              <div className="cert-metadata-text">
                <div className="cert-name-text" title={cert.name}>{truncatedName}</div>
                <div className="cert-date-text">{cert.date}</div>
              </div>
              <div className="cert-arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ paddingRight: '1px' }}>
                  <path d="M4.08028 6.78312C4.13548 6.78409 4.17945 6.82962 4.1785 6.88482L4.16112 7.89824C4.16018 7.95349 4.11461 7.99749 4.05936 7.99651L0.0982183 7.92605C0.0430208 7.92507 -0.00093878 7.87954 1.1668e-05 7.82435L0.0696947 3.77744C0.0706463 3.72218 0.116252 3.67817 0.171516 3.67918L1.16061 3.69735C1.21578 3.69836 1.25971 3.74388 1.25876 3.79906L1.22302 5.87422L5.91625 1.24871L3.9163 1.21346C3.8611 1.21249 3.81713 1.16696 3.81808 1.11176L3.83546 0.0983404C3.8364 0.0430951 3.88198 -0.000912024 3.93722 7.06658e-05L7.89836 0.0705313C7.95356 0.0715131 7.99752 0.117039 7.99657 0.172237L7.92689 4.21914C7.92594 4.2744 7.88033 4.31841 7.82507 4.3174L6.83597 4.29923C6.7808 4.29822 6.73687 4.2527 6.73782 4.19752L6.77415 2.09021L2.04883 6.74727L4.08028 6.78312Z" fill="#F4F2E7"/>
                </svg>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Expanded Certificate Modal */}
      {expandedCert && (
        <div 
          className="cert-modal-backdrop"
          onClick={handleModalBackdropClick}
        >
          <div 
            ref={modalRef}
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="cert-modal-close"
              onClick={handleCloseModal}
              aria-label="Close certificate modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#f4f2e7" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </button>
            <div className="cert-modal-image">
              <img src={expandedCert.certificateUrl} alt={expandedCert.name} />
            </div>
            <div className="cert-modal-info">
              <h3 className="cert-modal-title">{expandedCert.name}</h3>
              <p className="cert-modal-org">{expandedCert.organization}</p>
              <p className="cert-modal-date">{expandedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;