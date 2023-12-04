"use client"
import React, { useState, useEffect } from 'react';
import styles from './NavbarContainer.module.css';

interface MenuToggleProps {
  onToggle: (isMenuVisible: boolean) => void;
}

export const ButtonToggleMenu: React.FC<MenuToggleProps> = ({ onToggle }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuVisible;
    setIsMenuVisible(newState);
    onToggle(newState);
  };

  useEffect(() => {
    // Client-side effects related to menu visibility can go here
    // For example, handling body scroll lock
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      // Reset body style when the component unmounts
      document.body.style.overflow = '';
    };
  }, [isMenuVisible]);

  return (
    <button className={styles.rightIcon} onClick={toggleMenu} aria-label="Toggle Menu">
      {/* Icon or any other element representing the toggle state */}
      <div className={isMenuVisible ? styles.menuOpen : styles.menuClosed}>
        {/* Toggle Icon */}
      </div>
    </button>
  );
};
