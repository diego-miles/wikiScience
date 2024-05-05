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
  <div className="p-6 py-8 relative max-w-[40rem] mx-auto text-left rounded-2xl border-[3px] border-[#e3ecf0] dark:border-[#26657f] bg-background1 dark:bg-background1dark shadow-lg">  
      {links.map((link, index) => (
        <div key={index} className="flex items-center px-2 pb-3 ">
          <div className={`${styles.arrow} animate`} />
          <a
            href={`#${link.id}`}
            className={`${styles.link} text-[#1c4d75] dark:text-white font-semibold text-[1.5rem] py-1`}
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(link.id);
            }}
            ref={(el) => {
              linkRefs.current[index] = el;
            }}
          >
            {link.text}
          </a>
        </div>
      ))}
  </div>
  );
};

export default LocalContextLinks