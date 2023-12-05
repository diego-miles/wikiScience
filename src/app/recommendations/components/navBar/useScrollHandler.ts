"use client"
import { useState, useEffect } from 'react';

interface ScrollHandlerState {
  showNavbar: boolean;
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

export const useScrollHandler = (isMenuVisible: boolean): ScrollHandlerState => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Manejar la visibilidad del menú y el estilo del cuerpo del documento
  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isMenuVisible]);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return { showNavbar, scrollPosition, setScrollPosition };
};
