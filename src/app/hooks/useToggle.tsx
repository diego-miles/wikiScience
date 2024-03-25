"use client"
import { useState } from 'react';

const useToggle = (initialState = false) => {
  const [isActive, setIsActive] = useState(initialState);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const toggle = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setLastScrollPosition(window.pageYOffset);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      window.scrollTo(0, lastScrollPosition);
    }
  };

  return [isActive, toggle];
};

export default useToggle;