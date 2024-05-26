"use client"
// import { useEffect, useState } from 'react';

// const useStickyHeaders = (sectionIds: string[]): boolean[] => {
//   const [isStickyArray, setIsStickyArray] = useState<boolean[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const stickyArray = sectionIds.map((id) => {
//         const sectionTop = document.getElementById(id)?.getBoundingClientRect().top || 0;
//         return sectionTop < 0;
//       });
//       setIsStickyArray(stickyArray);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [sectionIds]);

//   return isStickyArray;
// };

// export default useStickyHeaders;
import React, { useEffect, useRef, useState } from 'react';

interface StickyH2Props {
  children?: React.ReactNode;
  id: string;
}

const StickyH2: React.FC<StickyH2Props> = ({ children, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const isSticky = rect.top <= 0;
        setIsSticky(isSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`sticky top-0 bg-background1 dark:bg-background1dark z-10 ${isSticky ? 'is-sticky' : ''}`}
    >
      {children}
    </div>
  );
};

export default StickyH2;