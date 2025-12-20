// Import certification/organization logos
import zuittLogo from '../assets/images/logos/zuitt-logo.svg';
import dictLogo from '../assets/images/logos/DCIT-logo.svg';
import creativeNationAcademyLogo from '../assets/images/logos/creative-nation-logo.svg'; 
import itsLogo from '../assets/images/logos/ITS-logo.svg';
import acssLogo from '../assets/images/logos/ACSS-logo.svg';
import ovprepqaLogo from '../assets/images/logos/OVPREPQA-logo.svg';
import sscLogo from '../assets/images/logos/SSC-logo.svg';
import ccydcLogo from '../assets/images/logos/CCYDC-logo.svg';

// Import certificate preview images
import cert1Preview from '../assets/images/certifcates/2023-08-05 - CSL_participation_asinatilaw.jpg';
import cert2Preview from '../assets/images/certifcates/09-03-23 - Certificate of Attendance KENT CYREM.webp';
import cert3Preview from '../assets/images/certifcates/09-06-23 - CNA-Certificate-1-1-1.webp';
import cert4Preview from '../assets/images/certifcates/09-12-23 - Certificate of AttendanceKENT CYREM.webp';
import cert5Preview from '../assets/images/certifcates/09-15-23 - Certificate of AttendanceKENT CYREM P. PATASIN.webp';
import cert6Preview from '../assets/images/certifcates/09-16-23 - Kent Cyrem P. Patasin Free Coding Bootcamp (September 16) - Certificate of Participation.webp';
import cert7Preview from '../assets/images/certifcates/09-20-23 - KENT CYREM P. PATASIN Certificate of Participation.webp';
import cert8Preview from '../assets/images/certifcates/09-13-23 - KENT CYREM P. PATASIN Certificate of Attendance.webp';
import cert9Preview from '../assets/images/certifcates/2023-12-08 -  LYORP_attendance_gapleaps.jpg';
import cert10Preview from '../assets/images/certifcates/2024-11-24 - CSL_participation_asinatilaw2024.webp';
import cert11Preview from '../assets/images/certifcates/11-14-25 - FIGMAGINATION CERTIFICATE OF PARTICIPATION.webp';
import cert12Preview from '../assets/images/certifcates/11-29-25 - PARTICIPATION_WebDev Basics.webp';
import cert13Preview from '../assets/images/certifcates/2025-12-04 - PARTICIPATION_Kent Cyrem P. Patasin_Certificate of Participation & Recognition.webp';



// Certification data (ordered from oldest to newest: ID 1 = oldest, ID 13 = newest)
export const certifications = [
  { 
    id: 1, 
    name: 'ASIN AT ILAW 2023: Pagtuloy: Continuing Unity, Camaraderie, and Peace among other Student Leaders through the Act and Call of Service', 
    organization: 'CCC-SSC', 
    date: 'Aug 5 2023', 
    category: 'leadership', 
    logo: sscLogo, 
    previewImage: cert1Preview, 
    certificateUrl: cert1Preview 
  },
  { 
    id: 2, 
    name: 'DTI Programs and Services and DICT Programs and Projects', 
    organization: 'DICT', 
    date: 'Sept 5 2023', 
    category: 'technical', 
    logo: dictLogo, 
    previewImage: cert2Preview, 
    certificateUrl: cert2Preview 
  },
  { 
    id: 3, 
    name: 'Learning Adobe Captivate 2023 for Educators', 
    organization: 'Creative Nation Academy', 
    date: 'Sept 6 2023', 
    category: 'technical', 
    logo: creativeNationAcademyLogo, 
    previewImage: cert3Preview, 
    certificateUrl: cert3Preview 
  },
  {
    id: 4, 
    name: 'Deceptive, Unfair, and Unconscionable Sales Acts and Practices', 
    organization: 'DICT', 
    date: 'Sept 12 2023', 
    category: 'technical', 
    logo: dictLogo, 
    previewImage: cert4Preview, 
    certificateUrl: cert4Preview 
  },
  { 
    id: 5, 
    name: 'Beyond the Screen: Exploring the Dynamic Duo of Media Information and Technology', 
    organization: 'DICT', 
    date: 'Sept 15 2023', 
    category: 'technical', 
    logo: dictLogo, 
    previewImage: cert5Preview, 
    certificateUrl: cert5Preview
  },
  { 
    id: 6, 
    name: 'Coding Bootcamp Basic Web Development Workshops', 
    organization: 'Zuitt', 
    date: 'Sept 16 2023', 
    category: 'technical', 
    logo: zuittLogo, 
    previewImage: cert6Preview, 
    certificateUrl: cert6Preview 
  },
  {  
    id: 7, 
    name: 'AI: Opening More Access to Economic Opportunities: A brief session and conversation', 
    organization: 'DICT', 
    date: 'Sept 20 2023', 
    category: 'technical', 
    logo: dictLogo, 
    previewImage: cert7Preview, 
    certificateUrl: cert7Preview 
  },
  { 
    id: 8, 
    name: 'AI: How the technology can be utilized responsibly and reliably as Human support', 
    organization: 'DICT', 
    date: 'Oct 12 2023', 
    category: 'technical', 
    logo: dictLogo, 
    previewImage: cert8Preview, 
    certificateUrl: cert8Preview 
  },
  { 
    id: 9, 
    name: 'GAD LEAPS: Leadership Enhancement, Augmentation, and Progress School', 
    organization: 'CCYDC', 
    date: 'Dec 8 2023', 
    category: 'leadership', 
    logo: ccydcLogo, 
    previewImage: cert9Preview, 
    certificateUrl: cert9Preview 
  },
  { 
    id: 10, 
    name: 'ASIN AT ILAW 2025: ALAB: Advancing Leadership and Achieving Breakthroughs', 
    organization: 'CCC-SSC', 
    date: 'Nov 26 2024', 
    category: 'leadership', 
    logo: sscLogo, 
    previewImage: cert10Preview, 
    certificateUrl: cert10Preview 
  },
  { 
    id: 11, 
    name: 'FIGMAgination: Where Art Meets The Algorithm', 
    organization: 'Information Technology Society', 
    date: 'Nov 14 2025', 
    category: 'technical', 
    logo: itsLogo, 
    previewImage: cert11Preview, 
    certificateUrl: cert11Preview 
  },
  { 
    id: 12, 
    name: 'WebDev Basics: A Web Development Workshop', 
    organization: 'ACSS', 
    date: 'Nov 29 2025', 
    category: 'technical', 
    logo: acssLogo, 
    previewImage: cert12Preview, 
    certificateUrl: cert12Preview 
  },
  { 
    id: 13, 
    name: 'TechnoExpo 2025: Empowering Communities. Elevate Industries. Exhibit Innovation', 
    organization: 'CCC-OVPREPQA', 
    date: 'Dec 4 2025', 
    category: 'technical', 
    logo: ovprepqaLogo, 
    previewImage: cert13Preview, 
    certificateUrl: cert13Preview 
  }
];
