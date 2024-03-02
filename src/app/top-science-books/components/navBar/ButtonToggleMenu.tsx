"use client"
import React, { useState } from 'react';
import styles from './NavbarContainer.module.css';

interface ButtonToggleMenuProps {
  setScrollPosition: (position: number) => void;
}

const ButtonToggleMenu: React.FC<ButtonToggleMenuProps> = ({ setScrollPosition }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => {
      if (!prevState) {
        setScrollPosition(window.scrollY); // Guardar la posición del scroll al abrir el menú
      }
      return !prevState;
    });
  };

  return (
    <button className={styles.rightIcon} onClick={toggleMenu} aria-label="Toggle Menu">
      <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
    </button>
  );
};

export default ButtonToggleMenu;
