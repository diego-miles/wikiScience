"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './NavbarContainer.module.css';
import NavigationMenu from './NavigationMenu';
import { useScrollHandler } from './useScrollHandler';
import { Suspense, lazy } from 'react';


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
  const { showNavbar, scrollPosition, setScrollPosition } = useScrollHandler(isMenuVisible);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => {
      if (!prevState) {
        setScrollPosition(window.scrollY); // Guardar la posición del scroll al abrir el menú
      }
      return !prevState;
    });
  };

  function closeDropdown() {
    const elem = document.activeElement as HTMLElement
    if (elem) {
      elem.blur()
    }
  }


  const menuStyle: React.CSSProperties = {
    visibility: isMenuVisible ? 'visible' : 'hidden',
    display: isMenuVisible ? 'flex' : 'none',
    opacity: isMenuVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.navbarContainer} ${showNavbar ? '' : styles.hidden}`}>
        <div className={styles.contextualLinks}>
          <Link href={`/recommendations/`}  onClick={closeDropdown}>{title}</Link>
          {title2 && (
            <>
              <span className={styles.padding}>{" > "}</span>
              <Link href={generateLink(domain, title2)}
                style={{ color: active ? 'var(--color-active-element)' : '' }} onClick={closeDropdown}>
                {title2}
              </Link>
            </>
          )}
          {title3 && (
            <>
              <span className={styles.padding}>{">"}</span>
              <Link href={generateLink(domain, title2, `/${toSlug(title3)}`)} className={`${styles.active} 'menu-link'`} onClick={closeDropdown}>
                {title3}
              </Link>
            </>
          )}
        </div>
        <button className={styles.rightIcon} onClick={toggleMenu} aria-label="Toggle Menu">
          <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
        </button>
      </div>
      <Suspense fallback={<div>Cargando menú...</div>}>
        <NavigationMenu style={menuStyle} />
      </Suspense>
    </div>
  );
};

export default NavBarContainer;
