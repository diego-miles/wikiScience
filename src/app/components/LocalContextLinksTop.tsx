"use client"
import React, { useRef, useEffect, useState } from 'react';
import styles from './localContextLinkTop.module.css';

type LocalContextLink = {
  text: string;
  id: string;
};

type LocalContextLinksProps = {
  links: LocalContextLink[];
};

const LocalContextLinks: React.FC<LocalContextLinksProps> = ({ links }) => {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const onScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (dropdownActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [dropdownActive]);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const smoothScroll = (id: string) => {
    if (dropdownActive) {
      toggleDropdown();
      setTimeout(() => {
        performScroll(id);
      }, 300);
    } else {
      performScroll(id);
    }
  };

  const performScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {!dropdownActive && (
        <div
          className={styles.localContextLinksContainer}
          style={{ display: isVisible ? 'flex' : 'none' }}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className={styles.linkText}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(link.id);
              }}
              ref={el => (linkRefs.current[index] = el)}
            >
              {link.text}
            </a>
          ))}
          <a
            className={styles.watchEverything}
            onClick={toggleDropdown}
          >
            See All
          </a>
        </div>
      )}
      {dropdownActive && (
        <div
          className={`${styles.localContextLinksContainer} ${styles.dropdown}`}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            zIndex: 1000, 
            overflowY: 'scroll'
          }}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className={styles.linkText}
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(link.id);
              }}
            >
              {link.text}
            </a>
          ))}
          <a
            className={styles.watchEverything}
            onClick={toggleDropdown}
          >
            Close
          </a>
        </div>
      )}
    </>
  );
};

export default LocalContextLinks;
