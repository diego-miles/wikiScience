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
    } else {
      document.body.style.overflow = '';
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
      {/* Non-dropdown container */}
      {!dropdownActive && (
        <div className="flex overflow-x-auto items-center fixed top-0 left-0 right-0 gap-2 py-8 px-4 pt-36 bg-background1 z-10 whitespace-nowrap dark:bg-background1dark">
          {/* Map through links and render anchors */}
         {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.id}`}
              className="text-a2 font-bold border-2 border-border rounded-lg px-4 py-2 text-center no-underline"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(link.id);
            }}
            ref={el => { linkRefs.current[index] = el; }} // Updated ref assignment
          >
            {link.text}
          </a>
        ))}
          {/* "See All" button */}
          <a className="font-noto-serif-georgian text-accent1 italic px-4 py-2 rounded-lg cursor-pointer fixed top-52 right-2 text-sm font-medium" onClick={toggleDropdown}>
            See All
          </a>
        </div>
      )}

      {/* Dropdown container */}
      {dropdownActive && (
        <div className="flex flex-col fixed top-0 left-0 right-0 bottom-0 py-40 z-30 overflow-y-auto bg-background1 ">
         {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.id}`}
              className="text-a2 font-bold   px-4 py-2 text-center my-2 no-underline" // Added margin for spacing
            onClick={(e) => {
              e.preventDefault();
              smoothScroll(link.id);
            }}
            ref={el => { linkRefs.current[index] = el; }} // Updated ref assignment
          >
            {link.text}
          </a>
        ))}
          <a className="font-noto-serif-georgian text-accent1 italic px-4 py-2 rounded-lg cursor-pointer fixed top-28 right-4 text-xl font-medium" onClick={toggleDropdown}>
            Close
          </a>
        </div>
      )}
    </>
  );
};

export default LocalContextLinks;


//   return (
//     <>
//       {!dropdownActive && (
//         <div
//           className={styles.localContextLinksContainer}
//           style={{ display: isVisible ? 'flex' : 'none' }}
//         >
//         {links.map((link, index) => (
//           <a
//             key={index}
//             href={`#${link.id}`}
//             className={styles.linkText}
//             onClick={(e) => {
//               e.preventDefault();
//               smoothScroll(link.id);
//             }}
//             ref={el => { linkRefs.current[index] = el; }} // Updated ref assignment
//           >
//             {link.text}
//           </a>
//         ))}
//           <a
//             className={styles.watchEverything}
//             onClick={toggleDropdown}
//           >
//             See All
//           </a>
//         </div>
//       )}
//       {dropdownActive && (
//         <div
//           className={`${styles.localContextLinksContainer} ${styles.dropdown}`}
//           style={{ 
//             position: 'fixed', 
//             top: 0, 
//             left: 0, 
//             right: 0, 
//             bottom: 0, 
//             zIndex: 1000, 
//             overflowY: 'scroll'
//           }}
//         >
//           {links.map((link, index) => (
//             <a
//               key={index}
//               href={`#${link.id}`}
//               className={styles.linkText}
//               onClick={(e) => {
//                 e.preventDefault();
//                 smoothScroll(link.id);
//               }}
//             >
//               {link.text}
//             </a>
//           ))}
//           <a
//             className={styles.watchEverything}
//             onClick={toggleDropdown}
//           >
//             Close
//           </a>
//         </div>
//       )}
//     </>
//   );
// };