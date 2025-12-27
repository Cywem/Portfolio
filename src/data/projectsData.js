import kwiseSkeleton from '../assets/images/kwise_skeleton.svg';
import kitsuneSkeleton from '../assets/images/kitsune_skeleton.svg';

export const projectsData = [
  {
    title: "K-Wise",
    category: "AI System",
    date: "Nov 2025",
    status: "In progress",
    timestamp: new Date('2025-11-20'),
    description: "The K-WISE kiosk system addressed slow, manual in-store assistance and frequent compatibility questions during PC builds.",
    categoryColor: "#66EECC",
    svgSrc: kwiseSkeleton,
  },
  {
    title: "Kitsune",
    category: "Prototype",
    date: "Sept 2025",
    status: "Completed",
    timestamp: new Date('2025-09-30'),
    description: "A modern e-commerce prototype for anime merchandise, focusing on clean UI and seamless user experience.",
    categoryColor: "#FF6B6B",
    svgSrc: kitsuneSkeleton,
  },
  {
    title: "HUBITS",
    category: "Management System",
    date: "In progress",
    status: "In progress",
    timestamp: new Date('2025-12-20'),
    description: "HUBITS centralizes ITS admin by streamlining data, users, finances, documents, and reports with integrated AI tools.",
    categoryColor: "#FEE21D",
  },
  {
    title: "ITS Explorer",
    category: "Website",
    date: "In progress",
    status: "In progress",
    timestamp: new Date('2025-12-20'),
    description: "An interactive web platform showcasing ITS facilities, services, and campus information for students and visitors.",
    categoryColor: "#F26C37",
  },
  {
    title: "PC Wise - PC Builder",
    category: "Website",
    date: "Coming soon...",
    status: "Coming soon",
    timestamp: new Date('2026-01-01'),
    description: "An intelligent PC building tool that helps users select compatible components and build their perfect computer system.",
    categoryColor: "#F26C37",
  },
];

export default projectsData;
