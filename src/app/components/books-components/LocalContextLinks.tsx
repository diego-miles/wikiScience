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
  // Explicitly define the type for the refs array
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Adjust the length of the refs array when the links change
    linkRefs.current = linkRefs.current.slice(0, links.length);
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
        <div key={index} className={styles.linkArrowRow} >
          <div className={`${styles.arrow} animate`}  />
          <a
            href={`#${link.id}`}
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(link.id);
            }}
            // Use a function to assign the ref
            ref={el => (linkRefs.current[index] = el)}
          >
            {link.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default LocalContextLinks;
