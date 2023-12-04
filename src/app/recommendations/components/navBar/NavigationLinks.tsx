import React from 'react';
import Link from 'next/link';
import { NavbarProps } from './NavbarProps'; // Assuming this file contains your NavbarProps interface
import { generateLink, toSlug } from './linkUtils'; // Utility functions for link generation
import styles from './NavbarContainer.module.css'; // Adjust the path as per your project structure

interface NavigationLinksProps extends NavbarProps {
  closeDropdown: () => void;
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({ title, title2, title3, domain, active, closeDropdown }) => {
  return (
    <div className={styles.contextualLinks}>
      {title && (
        <Link href={`/recommendations/`} onClick={closeDropdown}>
          {title}
        </Link>
      )}
      {title2 && (
        <>
          <span className={styles.separator}>{" > "}</span>
          <Link href={generateLink(domain, title2)} style={{ color: active ? 'var(--color-active-element)' : '' }} onClick={closeDropdown}>
            {title2}
          </Link>
        </>
      )}
      {title3 && (
        <>
          <span className={styles.separator}>{">"}</span>
          <Link href={generateLink(domain, title2, `/${toSlug(title3)}`)} className={`${active ? styles.active : ''} menu-link`} onClick={closeDropdown}>
            {title3}
          </Link>
        </>
      )}
    </div>
  );
};
