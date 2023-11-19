"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useScrollDetection } from './useScrollDetection';
import styles from './NavbarContainer.module.css';
import NavigationMenu from './NavigationMenu';

interface NavbarProps {
  title?: string;
  title2?: string;
  title3?: string;
  domain?: string;
}

const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};

const generateLink = (domain: string | undefined, title: string | undefined, additionalPath = '') => {
  const safeTitle = title ?? '';
  return `${domain}/recommendations/${toSlug(safeTitle)}${additionalPath}`;
};

const NavBarContainer: React.FC<NavbarProps> = ({ title, title2, title3, domain }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  // const navbarVisible = useScrollDetection();

  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
    // document.body.style.overflow = isMenuVisible ? 'hidden' : 'scroll';
    document.body.style.paddingRight = isMenuVisible ? '0px' : '.0rem';
    document.body.style.height = isMenuVisible ? 'auto' : '0rem';
  };

  // Adjust body scroll when menu visibility changes
  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? 'scroll' : 'hidden';
  }, [isMenuVisible]);

  // const navbarStyle: React.CSSProperties = {
  //   right: isMenuVisible ? '.5rem' : '0rem',
  // };

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
          <Link href={`${domain}/recommendations/`}>
            {title}
          </Link>
          {title2 && (
            <>
              <h6 className={styles.padding}>{" > "}</h6>
              <Link href={generateLink(domain, title2 ?? "")}>
                {title2}
              </Link>
            </>
          )}
          {title3 && (
            <>
              <h6 className={styles.padding}>{">"}</h6>
              <Link href={generateLink(domain, title2 ?? "", `/${toSlug(title3 ?? "")}`)} className={styles.active}>
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
