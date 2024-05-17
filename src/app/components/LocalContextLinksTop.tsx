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
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const onScroll = () => {
      if (!dropdownActive) {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(currentScrollTop < lastScrollTop);
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [dropdownActive]);

  useEffect(() => {
    if (dropdownActive) {
      setLastScrollPosition(window.pageYOffset);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, lastScrollPosition);
    }
  }, [dropdownActive, lastScrollPosition]);

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
          className="flex overflow-x-auto items-center fixed top-0 left-0 right-0 gap-2 py-[3.2rem] px-4 pt-[8rem] lg:pt-40 bg-background1 z-10 whitespace-nowrap dark:bg-background1dark"
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
            ref={el => { linkRefs.current[index] = el; }} // Updated ref assignment
          >
            {link.text}
          </a>
        ))}
          <a className="font-noto-serif-georgian text-accent1 italic px-4 py-2  cursor-pointer fixed top-[12.5rem] right-2 text-xs font-semibold" onClick={toggleDropdown}>
            See All
          </a>
        </div>
      )}
      {/* Dropdown container */}
      {dropdownActive && (
        <div className={`flex flex-col fixed top-0 pt-44 pb-40 left-0 right-0 z-30  min-h-lvh overflow-y-auto bg-background1 dark:bg-background1dark ${styles.dropdownScrollContainer}`} >
          <div>
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="font-medium text-base dark:text-sky-300 px-4 py-2 text-center my-2 no-underline" // Added margin for spacing
              onClick={(e) => {
                e.preventDefault();
                smoothScroll(link.id);
              }}
              ref={el => { linkRefs.current[index] = el; }} // Updated ref assignment
            >
              {link.text}
            </a>
          ))}
          <a className="font-noto-serif-georgian text-accent1 italic px-4 py-2 cursor-pointer fixed top-28 right-4 text-sm font-semibold" onClick={toggleDropdown}>
            Close
          </a>
          </div>
        </div>
      )}
    </>
  );
};

export default LocalContextLinks;
