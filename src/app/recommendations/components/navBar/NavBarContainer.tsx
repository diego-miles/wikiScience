"use client"
import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';
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
  // Explicitly type the visibility state
  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');

const toggleMenu = () => {
  if (isMenuVisible) {
    setMenuVisible(false);
    // setTimeout(() => setVisibility('hidden'), 500);
    setVisibility('hidden');
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
  } else {
    setVisibility('visible');
    setMenuVisible(true);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '5px'; // Ajustar el padding para compensar el ancho del scrollbar
  }
};



  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Memoize the handleScroll function
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]); // Dependencies

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]); // Updated dependency array


  const navbarStyle: React.CSSProperties = {
    transform: navbarVisible || isMenuVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 100,
    paddingRight: isMenuVisible ? '15px' : '10px', // Add padding when menu is visible
  };

  // Define inline styles that change based on the state
  const menuStyle: React.CSSProperties = {
    visibility: visibility,
    opacity: isMenuVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  };


  return (
    <div>
      <div style={navbarStyle} className={styles.navbarContainer}>
        <div className={styles.contextualLinks}>
          <Link href={`${domain}/recommendations/`} legacyBehavior>
            <a>{title}</a>
          </Link>
          {title2 && (
            <>
              <h6 className={styles.padding}>{" > "}</h6>
              <Link href={`${domain}/recommendations/${title2.replace(/\s+/g, '-').toLowerCase()}`} legacyBehavior>
                <a>{title2}</a>
              </Link>
            </>
          )}
          {title3 && (
            <>
              <h6 className={styles.padding}>{">"}</h6>
              <Link href={`${domain}/recommendations/${title2?.replace(/\s+/g, '-').toLowerCase()}/${title3.replace(/\s+/g, '-').toLowerCase()}`} legacyBehavior>
                <a  className={styles.active}>{title3}</a>
              </Link>
            </>
          )}
        </div>

        <span className={styles.rightIcon} onClick={toggleMenu}>
          <div className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
        </span>
      </div>
      <NavigationMenu style={menuStyle} />

    </div>
  );
};

export default NavBarContainer;
