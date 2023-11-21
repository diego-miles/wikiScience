"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NavbarContainer.module.css';
import NavigationMenu from './NavigationMenu';

interface NavbarProps {
  title?: string;
  title2?: string;
  title3?: string;
  domain?: string;
  active?: boolean;
}

const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};

const generateLink = (domain: string | undefined, title: string | undefined, additionalPath = '') => {
  const safeTitle = title ?? '';
  return `/recommendations/${toSlug(safeTitle)}${additionalPath}`;
};

const NavBarContainer: React.FC<NavbarProps> = ({ title, title2, title3, domain, active }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh'; // Set to full viewport height
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto'; // Reset to default
    }
  }, [isMenuVisible]);


  const menuStyle: React.CSSProperties = {
    visibility: isMenuVisible ? 'visible' : 'hidden',
    display: isMenuVisible ? 'block' : 'none',
    opacity: isMenuVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <div className={styles.contextualLinks}>
          <Link href={`/recommendations/`}>{title}</Link>
          {title2 && (
            <>
              <span className={styles.padding}>{" > "}</span>
              <Link href={generateLink(domain, title2)}
                    style={{ color: active ? 'var(--color-active-element)' : '' }}>
                {title2}
              </Link>
            </>
          )}
          {title3 && (
            <>
              <span className={styles.padding}>{">"}</span>
              <Link href={generateLink(domain, title2, `/${toSlug(title3)}`)} className={styles.active}>
                {title3}
              </Link>
            </>
          )}
        </div>
        <button className={styles.rightIcon} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
        </button>
      </div>
      <NavigationMenu style={menuStyle} />
    </div>
  );
};

export default NavBarContainer;
