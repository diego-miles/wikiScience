"use client"
import React, { useState } from 'react';
import styles from './NavbarContainer.module.css';
import NavigationMenu from './NavigationMenu';

interface NavbarProps {
  title: string;
  title2: string;
}

const NavBarContainer: React.FC<NavbarProps> = ({ title, title2 }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <div className={styles.navbarContainer}>
        <h6>{title}</h6>
        <h6>{">"}</h6>
        <h6 className={styles.active}>{title2}</h6>
        <span className={styles.rightIcon} onClick={toggleMenu}>
          <div className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
        </span>
      </div>
      {isMenuVisible && <NavigationMenu />}
    </div>
  );
};

export default NavBarContainer;

