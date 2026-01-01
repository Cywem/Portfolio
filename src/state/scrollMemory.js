// Global scroll memory - persists scroll position using sessionStorage
const SCROLL_KEY = 'homeScrollPosition';

export const saveHomeScroll = () => {
  sessionStorage.setItem(SCROLL_KEY, window.scrollY.toString());
};

export const getHomeScroll = () => {
  const saved = sessionStorage.getItem(SCROLL_KEY);
  return saved ? parseInt(saved, 10) : 0;
};

export const clearHomeScroll = () => {
  sessionStorage.removeItem(SCROLL_KEY);
};
