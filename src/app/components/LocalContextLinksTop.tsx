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
  const [isDropdown, setIsDropdown] = useState(false);


  useEffect(() => {
    linkRefs.current = linkRefs.current.slice(0, links.length);

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const onScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false); // Esconde al hacer scroll hacia abajo
      } else {
        setIsVisible(true); // Muestra al hacer scroll hacia arriba
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Evita valores negativos 
    };


    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsDropdown(true);
      } else {
        setIsDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
    <>
      <div 
        className={styles.localContextLinksContainer + (isDropdown ? ` ${styles.dropdown}` : '')}
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
          onClick={() => setIsDropdown(!isDropdown)}
        >
          See All
        </a>
      </div>
    </>
  );
};

export default LocalContextLinks;
