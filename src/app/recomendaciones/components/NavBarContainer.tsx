"use client"
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import NavigationMenu from './NavigationMenu';

interface NavbarProps {
  title: string;
  profileLink: string;
  // menuLink: string;
}

const NavBarContainer: React.FC<NavbarProps> = ({ title, profileLink }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={styles.navbarContainer}>
        <Link href={profileLink} passHref>
          <span className={styles.iconWrapper}></span>
        </Link>
        <h6 className={styles.title}>{title}</h6>
        <span className={styles.rightIcon} onClick={toggleMenu}>
          <span className={styles.iconWrapper}></span>
        </span>
      </div>
      {isMenuOpen && <NavigationMenu />}
    </div>
  );
};

export default NavBarContainer;
