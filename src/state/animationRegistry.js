// Global animation registry - tracks which animations have played
// Persists across route changes but resets on page refresh
export const animationRegistry = {
  hero: false,
  projectsIntro: false,
  certifications: false,
  affiliations: false,
  awards: false,
  aboutLeft: false,
  projectsPage: false,
};

// Reset function for testing (call on page refresh)
export const resetAnimations = () => {
  Object.keys(animationRegistry).forEach(key => {
    animationRegistry[key] = false;
  });
};
