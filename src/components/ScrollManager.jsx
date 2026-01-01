import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_KEY = 'homeScrollPosition';

const ScrollManager = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);
  const hasRestoredHome = useRef(false);

  useLayoutEffect(() => {
    const isHome = location.pathname === '/';
    
    console.log('[ScrollManager] Route:', location.pathname, 'First render:', isFirstRender.current);
    
    // Skip everything on first render - let page load naturally
    if (isFirstRender.current) {
      isFirstRender.current = false;
      
      // Only restore home scroll if landing on home
      if (isHome) {
        const savedScroll = sessionStorage.getItem(SCROLL_KEY);
        if (savedScroll) {
          console.log('[ScrollManager] First render - Restoring home scroll:', savedScroll);
          window.scrollTo(0, parseInt(savedScroll, 10));
          sessionStorage.removeItem(SCROLL_KEY);
          hasRestoredHome.current = true;
        }
      } else {
        console.log('[ScrollManager] First render - Non-home route, doing nothing');
      }
      return;
    }

    // On subsequent navigations
    if (isHome) {
      // Restore home scroll only once per navigation cycle
      if (!hasRestoredHome.current) {
        const savedScroll = sessionStorage.getItem(SCROLL_KEY);
        if (savedScroll) {
          console.log('[ScrollManager] Restoring home scroll:', savedScroll);
          window.scrollTo(0, parseInt(savedScroll, 10));
          sessionStorage.removeItem(SCROLL_KEY);
          hasRestoredHome.current = true;
        } else {
          console.log('[ScrollManager] Home route but no saved scroll');
        }
      } else {
        console.log('[ScrollManager] Home route but already restored');
      }
    } else {
      // For non-home routes, scroll to top
      console.log('[ScrollManager] Non-home route - Scrolling to top');
      window.scrollTo(0, 0);
      hasRestoredHome.current = false;
    }
  }, [location.pathname]);

  return null;
};

export default ScrollManager;
