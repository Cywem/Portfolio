// Global scroll memory - persists scroll position across route changes
export let lastHomeScrollY = 0;

export const saveHomeScroll = () => {
  lastHomeScrollY = window.scrollY;
};

export const getHomeScroll = () => {
  return lastHomeScrollY;
};
