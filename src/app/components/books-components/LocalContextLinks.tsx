"use client"
import React, { useRef, useEffect } from 'react';
import styles from './localContextLink.module.css';

type LocalContextLink = {
  text: string;
  id: string;
};

type LocalContextLinksProps = {
  links: LocalContextLink[];
};

const LocalContextLinks: React.FC<LocalContextLinksProps> = ({ links }) => {
  // useRef to create a container for the refs
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Initialize or update the refs array to match the number of links
  useEffect(() => {
    linkRefs.current = links.map((_, index) => linkRefs.current[index] || null);
  }, [links]);

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={styles.localContextLinksContainer}>
      {links.map((link, index) => (
        <div key={index} className={styles.linkArrowRow}>
          <div className={`${styles.arrow} animate`} />
          <a
            href={`#${link.id}`}
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(link.id);
            }}
            ref={el => {
              linkRefs.current[index] = el; // Directly assign the ref
            }}
          >
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default LocalContextLinks;