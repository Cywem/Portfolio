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

    // Use throttle for better performance
    let scrollTimeout;
    const throttledHandleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 150);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      // Save final position on unmount
      saveHomeScroll();
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
