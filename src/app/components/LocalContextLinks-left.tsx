"use client"
import React, { useRef, useEffect } from 'react';
import styles from './localContextLinkLeft.module.css';

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
        <a
          key={index}
          href={`#${link.id}`}
          className={styles.linkText} // Updated class name
          onClick={(e) => {
            e.preventDefault();
            smoothScroll(link.id);
          }}
          ref={el => (linkRefs.current[index] = el)}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default LocalContextLinks;
