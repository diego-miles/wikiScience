import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  title: string;
  profileLink: string;
  menuLink: string;
}

const NavBarContainer: React.FC<NavbarProps> = ({ title, profileLink, menuLink }) => {
  return (
    <div className={styles.navbarContainer}>
      <a href={profileLink} className={styles.leftIcon} />  
      <h6 className={styles.title}>{title}</h6>
      <a href={menuLink} className={styles.rightIcon} /> 
    </div>
  );
}

export default NavBarContainer;
