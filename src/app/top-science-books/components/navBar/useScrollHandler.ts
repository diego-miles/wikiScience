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

  // Guardar la posición del scroll al abrir el menú
  useEffect(() => {
    if (isMenuVisible) {
      setScrollPosition(window.scrollY);
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
      // Restaurar la posición del scroll al cerrar el menú
      window.scrollTo(0, scrollPosition);
    }
  }, [isMenuVisible, scrollPosition]);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isMenuVisible) { // Asegurarse de que el scroll se maneje solo cuando el menú esté cerrado
        setShowNavbar(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuVisible]);

  return { showNavbar, scrollPosition, setScrollPosition };
};
