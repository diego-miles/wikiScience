"use client"
import { useState, useEffect } from 'react';

interface ScrollHandlerState {
  showNavbar: boolean;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

export const useScrollHandler = (): ScrollHandlerState => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { showNavbar, scrollPosition, setScrollPosition };
};
