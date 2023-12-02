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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0); // Guarda la posición del scroll
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(prevState => {
      if (!prevState) {
        setScrollPosition(window.scrollY); // Guardar la posición del scroll al abrir el menú
      }
      return !prevState;
    });
  };

  useEffect(() => {
    if (!isMenuVisible) {
      // Restaurar la posición del scroll después de un pequeño retraso
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0); // Puedes ajustar este tiempo según sea necesario
    } else {
      // Configuraciones para el body cuando el menú está abierto
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    }

    return () => {
      // Restablecer el estilo del body cuando el menú se cierra o el componente se desmonta
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isMenuVisible, scrollPosition]);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh'; // Set to full viewport height
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto'; // Reset to default
    }
  }, [isMenuVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
      setShowNavbar(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // useEffect(() => {
  //   const handleLinkClick = () => {
  //     setIsMenuVisible(false);
  //   };

  //   const menuLinks = document.querySelectorAll('.menu-link'); // Add a class 'menu-link' to your menu links

  //   menuLinks.forEach(link => {
  //     link.addEventListener('click', handleLinkClick);
  //   });

  //   return () => {
  //     menuLinks.forEach(link => {
  //       link.removeEventListener('click', handleLinkClick);
  //     });
  //   };
  // }, []);

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
      <NavigationMenu style={menuStyle} />
    </div>
  );
};

export default NavBarContainer;
