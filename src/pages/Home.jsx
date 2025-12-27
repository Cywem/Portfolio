import { useEffect } from 'react';
import { saveHomeScroll } from '../state/scrollMemory';
import Hero from '../components/Sections/Hero';
import Project from '../components/Sections/Project';
import TechStack from '../components/Sections/TechStack';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';

const Home = () => {
  // Save scroll position continuously while on Home page
  useEffect(() => {
    const handleScroll = () => {
      saveHomeScroll();
    };

    let scrollTimeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(scrollTimeout);
      saveHomeScroll(); // Save final position on unmount
    };
  }, []);

  return (
    <>
      <Hero />
      <Project />
      <TechStack />
      <About />
      <Footer />
    </>
  );
};

export default Home;
