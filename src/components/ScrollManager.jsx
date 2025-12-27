import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getHomeScroll } from '../state/scrollMemory';

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Projects page always starts at top
    if (location.pathname === '/projects') {
      window.scrollTo(0, 0);
    }
    // Home page restores previous scroll position
    else if (location.pathname === '/') {
      const savedScroll = getHomeScroll();
      window.scrollTo(0, savedScroll);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
