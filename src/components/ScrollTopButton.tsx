"use client"
import React, { useState, useEffect, useCallback } from 'react';
import styles from "./ScrollTopButton.module.css"

const ScrollButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const currentScrollY: number = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const smoothScrollToTop = (duration: number): void => {
    const cosParameter: number = window.scrollY / 2;
    let scrollCount: number = 0, oldTimestamp: number | null = null;

    const step = (newTimestamp: number) => {
      if (oldTimestamp !== null) {
        scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
        if (scrollCount >= Math.PI) return window.scrollTo(0, 0);
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  };

  const scrollToTop = (): void => {
    smoothScrollToTop(500); // Duration in milliseconds
  };

  return (
    visible && (
      <button className={`${styles.scrollUp} ${visible ? styles.scrollUpVisible : ''}`} onClick={scrollToTop}>
        /\
      </button>
    )
  );
};

export default ScrollButton;
