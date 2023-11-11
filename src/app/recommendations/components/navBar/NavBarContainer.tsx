"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './NavbarContainer.module.css';
import NavigationMenu from './NavigationMenu';

interface NavbarProps {
  title?: string;
  title2?: string;
  title3?: string;
  domain?: string; // Add domain as a prop
}



const NavBarContainer: React.FC<NavbarProps> = ({ title, title2, title3, domain }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      <div className={styles.navbarContainer}>
        <div>
          <Link href={`${domain}/recommendations/`} legacyBehavior>
            <a><h6>{title}</h6></a>
          </Link>
          {title2 && (
            <>
              <h6 className={styles.padding}>{" > "}</h6>
              <Link href={`${domain}/recommendations/${title2.replace(/\s+/g, '-').toLowerCase()}`} legacyBehavior>
                <a><h6>{title2}</h6></a>
              </Link>
            </>
          )}
          {title3 && (
            <>
              <h6 className={styles.padding}>{">"}</h6>
              <Link href={`${domain}/recommendations/${title2?.replace(/\s+/g, '-').toLowerCase()}/${title3.replace(/\s+/g, '-').toLowerCase()}`} legacyBehavior>
                <a><h6 className={styles.active}>{title3}</h6></a>
              </Link>
            </>
          )}
        </div>

        <span className={styles.rightIcon} onClick={toggleMenu}>
          <div className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
        </span>
      </div>
      {isMenuVisible && <NavigationMenu />}
    </div>
  );
};

export default NavBarContainer;
