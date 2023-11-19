import React from 'react';

export const useScrollDetection = () => {
  const [navbarVisible, setNavbarVisible] = React.useState(true);

  React.useEffect(() => {
    let lastScrollY = 0;

    const updateNavbarVisibility = () => {
      const currentScrollY = window.scrollY;
      setNavbarVisible(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateNavbarVisibility);
    return () => window.removeEventListener('scroll', updateNavbarVisibility);
  }, []);

  return navbarVisible;
};
