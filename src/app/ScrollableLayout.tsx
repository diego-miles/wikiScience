"use client"
import React, { useState, useEffect } from 'react';

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    __scrollTimeout?: NodeJS.Timeout;
  }
}

// useScrollDetect Hook
const useScrollDetect = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) setIsScrolling(true);

      clearTimeout(window.__scrollTimeout);
      window.__scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.__scrollTimeout) {
        clearTimeout(window.__scrollTimeout);
      }
    };
  }, [isScrolling]);

  return isScrolling;
};

// ScrollableLayout Component
const ScrollableLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isScrolling = useScrollDetect();

  const style: React.CSSProperties = {
    overflowY: isScrolling ? 'scroll' : 'hidden',
    // Add other styles as needed
  };

  return <div style={style}>{children}</div>;
};

export default ScrollableLayout;
