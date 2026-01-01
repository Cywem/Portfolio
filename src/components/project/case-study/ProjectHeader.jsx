import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import './projectCaseStudy.css';

import globeAnimation from '../../../assets/icons/globe.json';
import githubAnimation from '../../../assets/icons/github.json';
import documentAnimation from '../../../assets/icons/document.json';
import githubHoverAnimation from '../../../assets/icons/github-hover.json';

import figmaIcon from '../../../assets/icons/figma-icon.svg';
import mongoDBIcon from '../../../assets/icons/mongoDB-icon.svg';
import expressIcon from '../../../assets/icons/express-icon.svg';
import reactIcon from '../../../assets/icons/react-icon.svg';
import nodeIcon from '../../../assets/icons/node-icon.svg';
import postgreSQLIcon from '../../../assets/icons/postgreSQL-icon.svg';
import pythonIcon from '../../../assets/icons/python-icon.svg';
import photoshopIcon from '../../../assets/icons/photoshop-icon.svg';

// Icon mapping for technology badges
const techIconMap = {
  'Figma': figmaIcon,
  'MongoDB': mongoDBIcon,
  'Express.js': expressIcon,
  'React.js': reactIcon,
  'React': reactIcon,
  'Node.js': nodeIcon,
  'PostgreSQL': postgreSQLIcon,
  'Python': pythonIcon,
  'TensorFlow': pythonIcon,
  'Adobe Photoshop': photoshopIcon,
  'Photoshop': photoshopIcon,
};

const ProjectHeader = ({ title, subtitle, meta, backPath, backLabel, project }) => {
  // Refs and state for project links hover effects
  const globeRef = useRef(null);
  const githubRef = useRef(null);
  const documentRef = useRef(null);
  
  const [globeHovered, setGlobeHovered] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);
  const [documentHovered, setDocumentHovered] = useState(false);
  
  const globeTimeoutRef = useRef(null);
  const githubTimeoutRef = useRef(null);
  const documentTimeoutRef = useRef(null);

  return (

    <div className="case-study-header">
      <div className="case-study-header-container">
        <div className='title-column'>
          <Link to={backPath} className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M5.72781 0.320185L0.308893 5.73239C0.210225 5.83533 0.13288 5.95672 0.0812984 6.0896C-0.0270995 6.35313 -0.0270995 6.64872 0.0812984 6.91225C0.13288 7.04512 0.210225 7.16651 0.308893 7.26946L5.72781 12.6817C5.82886 12.7826 5.94883 12.8626 6.08086 12.9173C6.21288 12.9719 6.35439 13 6.4973 13C6.78591 13 7.06271 12.8855 7.26679 12.6817C7.47087 12.4778 7.58552 12.2014 7.58552 11.9131C7.58552 11.6249 7.47087 11.3484 7.26679 11.1446L3.6903 7.58336L11.9162 7.58336C12.2037 7.58336 12.4793 7.46932 12.6826 7.26632C12.8858 7.06333 13 6.788 13 6.50092C13 6.21384 12.8858 5.93852 12.6826 5.73552C12.4793 5.53252 12.2037 5.41848 11.9162 5.41848L3.6903 5.41848L7.26679 1.85725C7.36837 1.75662 7.44899 1.6369 7.50402 1.505C7.55904 1.37309 7.58737 1.23161 7.58737 1.08872C7.58737 0.945823 7.55904 0.804342 7.50402 0.672437C7.44899 0.540531 7.36837 0.420812 7.26679 0.320185C7.16603 0.21873 7.04617 0.138201 6.9141 0.0832472C6.78203 0.0282927 6.64037 0 6.4973 0C6.35423 0 6.21257 0.0282927 6.0805 0.0832472C5.94843 0.138201 5.82856 0.21873 5.72781 0.320185Z"
              fill="#84837F"/>
            </svg>
            <span>{backLabel}</span>
          </Link>
          <div className='project-title-container'>
            <h1 className="case-study-title">
              {title}
            </h1>
            <p className="case-study-subtitle">
              {subtitle}
            </p>
          </div>
        </div>
        
        <div className='project-details'>
          <div className='project-details-containter'>
            <div className='project-information-links-container'>
              <p style={{ color: project?.categoryColor || '#66EECC' }}>{project?.category || meta.category}</p>
              <div className='project-information-links'>
                <p>{meta.date}</p>
                <div className='project-links'>
                  <a
                    onMouseEnter={() => {
                      if (globeTimeoutRef.current) {
                        clearTimeout(globeTimeoutRef.current);
                      }
                      setGlobeHovered(true);
                      globeTimeoutRef.current = setTimeout(() => {
                        if (globeRef.current) {
                          globeRef.current.play();
                        }
                      }, 50);
                    }}
                    onMouseLeave={() => {
                      if (globeTimeoutRef.current) {
                        clearTimeout(globeTimeoutRef.current);
                      }
                      setGlobeHovered(false);
                      if (globeRef.current) {
                        globeRef.current.stop();
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <Lottie 
                      lottieRef={globeRef}
                      animationData={globeAnimation}
                      loop={true}
                      autoplay={false}
                      style={{ 
                        width: 28, 
                        height: 28,
                        transform: globeHovered ? 'scale(1.14286)' : 'scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </a>
                  <a
                    onMouseEnter={() => {
                      if (githubTimeoutRef.current) {
                        clearTimeout(githubTimeoutRef.current);
                      }
                      setGithubHovered(true);
                      githubTimeoutRef.current = setTimeout(() => {
                        if (githubRef.current) {
                          githubRef.current.play();
                        }
                      }, 50);
                    }}
                    onMouseLeave={() => {
                      if (githubTimeoutRef.current) {
                        clearTimeout(githubTimeoutRef.current);
                      }
                      setGithubHovered(false);
                      if (githubRef.current) {
                        githubRef.current.stop();
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <Lottie 
                      lottieRef={githubRef}
                      animationData={githubHovered ? githubHoverAnimation : githubAnimation}
                      loop={true}
                      autoplay={false}
                      style={{ 
                        width: 28, 
                        height: 28,
                        transform: githubHovered ? 'scale(1.14286)' : 'scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </a>
                  <a
                    onMouseEnter={() => {
                      if (documentTimeoutRef.current) {
                        clearTimeout(documentTimeoutRef.current);
                      }
                      setDocumentHovered(true);
                      documentTimeoutRef.current = setTimeout(() => {
                        if (documentRef.current) {
                          documentRef.current.play();
                        }
                      }, 50);
                    }}
                    onMouseLeave={() => {
                      if (documentTimeoutRef.current) {
                        clearTimeout(documentTimeoutRef.current);
                      }
                      setDocumentHovered(false);
                      if (documentRef.current) {
                        documentRef.current.stop();
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <Lottie 
                      lottieRef={documentRef}
                      animationData={documentAnimation}
                      loop={true}
                      autoplay={false}
                      style={{ 
                        width: 28, 
                        height: 28,
                        transform: documentHovered ? 'scale(1.14286)' : 'scale(1)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='divider'></div>
            <div className='project-role-technology-container'>
              <div className='project-role'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8608 0.00113934C19.1398 0.00117615 19.4091 0.103613 19.6176 0.289022C19.8262 0.47443 19.9594 0.729913 19.992 1.00701L20 1.13916V7.58336C20.0001 7.73895 19.9683 7.8929 19.9065 8.03573C19.8448 8.17856 19.7545 8.30723 19.6411 8.41381L19.5386 8.49924L11.3385 14.5596L12.4162 15.6383C12.6125 15.8343 12.7306 16.0952 12.7482 16.3721C12.7658 16.6489 12.6818 16.9227 12.5119 17.142L12.4162 17.2491L10.8054 18.8599C10.654 19.0114 10.463 19.1173 10.2542 19.1652C10.0455 19.2132 9.82744 19.2013 9.62512 19.131L9.49069 19.074L7.00263 17.8301L5.16621 19.6664C4.97004 19.8625 4.70905 19.9803 4.43219 19.9978C4.15533 20.0152 3.88163 19.931 3.66244 19.7609L3.55535 19.6664L0.333634 16.4437C0.137486 16.2476 0.0196554 15.9866 0.00224679 15.7097C-0.0151619 15.4329 0.0690479 15.1592 0.239078 14.94L0.333634 14.8329L2.16892 12.9966L0.926028 10.5099C0.829907 10.3182 0.78982 10.1033 0.810376 9.88994C0.830932 9.67653 0.911296 9.47326 1.04223 9.30349L1.13906 9.19413L2.74992 7.58336C2.94609 7.38723 3.20708 7.2694 3.48394 7.25199C3.7608 7.23458 4.0345 7.31879 4.25369 7.48881L4.36078 7.58336L5.43962 8.66214L11.5003 0.462497C11.5928 0.337288 11.7099 0.232357 11.8445 0.154183C11.9791 0.0760084 12.1283 0.0262487 12.2829 0.00797433L12.4162 0H18.8608V0.00113934ZM3.55535 9.99837L3.33092 10.2239L4.57495 12.7118C4.6817 12.9257 4.71846 13.1678 4.68002 13.4037C4.64158 13.6396 4.5299 13.8575 4.36078 14.0264L2.75106 15.6383L4.36192 17.2491L5.97392 15.6383C6.143 15.4694 6.36094 15.3579 6.59687 15.3197C6.83281 15.2815 7.0748 15.3184 7.28858 15.4253L9.77663 16.6693L10.0011 16.4437L3.55649 9.99951L3.55535 9.99837ZM17.7216 2.27945H12.9927L7.06871 10.2911L9.70942 12.9306L17.7216 7.00923V2.27945Z" fill="#84837F"/>
                </svg>
                <p>UI/UX</p>
                <p>System Architecture</p>
                <p>Front-end Dev</p>
              </div>
              <div className='project-technology-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18 2H20V18H18V20H2V18H0V2H2V0H18V2ZM11.2686 4.00684C11.1467 4.02176 11.0288 4.06142 10.9219 4.12305C10.815 4.18466 10.7203 4.26732 10.6445 4.36621C10.5689 4.46505 10.5126 4.57822 10.4795 4.69922L7.7207 14.7832C7.65383 15.0279 7.68429 15.2902 7.80566 15.5117C7.92706 15.7332 8.12968 15.8963 8.36816 15.9648C8.60667 16.0334 8.86219 16.0014 9.07812 15.877C9.29393 15.7525 9.45262 15.5453 9.51953 15.3008L12.2793 5.21777C12.3124 5.09665 12.3212 4.96964 12.3066 4.84473C12.292 4.71985 12.2535 4.5989 12.1934 4.48926C12.1332 4.37966 12.0525 4.28275 11.9561 4.20508C11.8596 4.12751 11.7489 4.07 11.6309 4.03613C11.5129 4.0022 11.3902 3.99195 11.2686 4.00684ZM6.5752 6.33301C6.45258 6.33301 6.33106 6.35716 6.21777 6.40527C6.10442 6.45346 6.0008 6.52426 5.91406 6.61328L3.27344 9.32324C3.09858 9.50281 3.00006 9.74621 3 10C3 10.2538 3.09859 10.4971 3.27344 10.6768L5.91504 13.3867C6.09008 13.5663 6.3276 13.6678 6.5752 13.668C6.82291 13.668 7.06112 13.5673 7.23633 13.3877C7.41154 13.2081 7.50971 12.9641 7.50977 12.71C7.50981 12.4559 7.41145 12.2119 7.23633 12.0322L5.25488 10L7.23535 7.96777C7.41026 7.78815 7.50879 7.54391 7.50879 7.29004C7.50871 7.0363 7.41017 6.79283 7.23535 6.61328C7.14861 6.52426 7.04597 6.45346 6.93262 6.40527C6.81932 6.35715 6.69782 6.33301 6.5752 6.33301ZM13.418 6.30859C13.2927 6.30633 13.1679 6.32985 13.0518 6.37793C12.9356 6.42606 12.8298 6.49804 12.7412 6.58887C12.6526 6.67974 12.5821 6.78809 12.5352 6.90723C12.4882 7.02647 12.4656 7.15462 12.4678 7.2832C12.47 7.41177 12.4969 7.53879 12.5479 7.65625C12.5989 7.77376 12.6729 7.88007 12.7646 7.96777L14.7451 10L12.7637 12.0322C12.677 12.1212 12.6084 12.2275 12.5615 12.3438C12.5147 12.4599 12.4902 12.5843 12.4902 12.71C12.4903 12.8356 12.5147 12.9601 12.5615 13.0762C12.6085 13.1924 12.6779 13.2987 12.7646 13.3877C12.8513 13.4765 12.9542 13.5467 13.0674 13.5947C13.1807 13.6428 13.3021 13.668 13.4248 13.668C13.5474 13.6679 13.6689 13.6429 13.7822 13.5947C13.8955 13.5466 13.9983 13.4757 14.085 13.3867L16.7266 10.6768C16.9015 10.4972 17 10.2539 17 10C17 9.74597 16.9017 9.50192 16.7266 9.32227L14.085 6.61328C13.9995 6.51916 13.8958 6.44396 13.7812 6.3916C13.6668 6.33928 13.5433 6.3109 13.418 6.30859Z" fill="#84837F"/>
                </svg>
                <div className='technology-items-column'>
                  {meta.tools && Array.from({ length: Math.ceil(meta.tools.length / 5) }, (_, rowIndex) => (
                    <div key={rowIndex} className='technology-items-row'>
                      {meta.tools.slice(rowIndex * 5, (rowIndex + 1) * 5).map((tool, index) => {
                        const icon = techIconMap[tool];
                        return (
                          <span key={rowIndex * 5 + index} className='technology-item'>
                            {icon && <img src={icon} alt={tool} width="12" height="12" />}
                            {tool}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default ProjectHeader;
