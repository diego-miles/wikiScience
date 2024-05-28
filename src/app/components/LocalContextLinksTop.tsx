"use client";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollContainerRef.current && event.deltaY !== 0) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, [dropdownActive]); // Add dropdownActive to dependencies to re-attach listener after state change

  useEffect(() => {
    const handleClickInside = (event: MouseEvent) => {
      if (scrollContainerRef.current && scrollContainerRef.current.contains(event.target as Node) && !dropdownActive) {
        if (!linkRefs.current.some(linkRef => linkRef?.contains(event.target as Node))) {
          setDropdownActive(true);
        }
      }
    };

    if (!dropdownActive) {
      document.addEventListener('mousedown', handleClickInside);
    } else {
      document.removeEventListener('mousedown', handleClickInside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickInside);
    };
  }, [dropdownActive]);

  return (
    <>
      {!dropdownActive && (
        <div
          className={`flex    overflow-x-auto items-center fixed top-0 left-0 right-0 gap-2 py-[3rem] px-4 pt-[8rem] lg:pt-40 bg-background1 z-10 whitespace-nowrap dark:bg-background1dark ${styles.dropdownScrollContainer}`}
          style={{ display: isVisible ? 'flex' : 'none' }}
          ref={scrollContainerRef}
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className={`dark:text-[#eefaff] ${styles.linkText}`}
              onMouseDown={(e) => {
                e.preventDefault();
                smoothScroll(link.id);
              }}
              ref={el => { linkRefs.current[index] = el; }}
            >
              {link.text}
            </a>
          ))}
          <a className="font-noto-serif-georgian text-accent1 italic px-4 py-2 cursor-pointer fixed top-[12.5rem] lg:top-[14.5rem] right-2 text-xs font-semibold" onMouseDown={toggleDropdown}>
            See All
          </a>
        </div>
      )}
      {/* Dropdown container */}
      {dropdownActive && (
        <div className={`flex flex-col fixed top-0 pt-44 pb-40 left-0 right-0 z-30 min-h-lvh overflow-y-auto bg-background1 dark:bg-background1dark ${styles.dropdownScrollContainer2}`} >
          <div className='flex flex-wrap max-h-[50rem] md:px-10  gap-5 pt-12 pl-3 pr-6 max-w-[100rem] mx-auto'>
            
            {links.map((link, index) => (
              <a
                key={index}
                href={`#${link.id}`}
                className="font-medium text-sm md:text-base   dark:text-sky-300 px-3 py-2 text-center my-2  no-underline"
                onMouseDown={(e) => {
                  e.preventDefault();
                  smoothScroll(link.id);
                }}
                ref={el => { linkRefs.current[index] = el; }}
              >
                {link.text}
              </a>
            ))}
            <a className="font-noto-serif-georgian text-accent1 italic px-4 py-2 cursor-pointer fixed top-28 lg:top-40 right-8 md:right-48 text-sm font-semibold" onMouseDown={toggleDropdown}>
              Close
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default LocalContextLinks;
