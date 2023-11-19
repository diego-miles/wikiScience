// "use client"

// import React, { useEffect } from 'react';

// const ScrollbarUpdater = () => {
//   useEffect(() => {
//     const updateScrollbar = () => {
//       const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//       const thumbHeight = Math.max(30, scrollPercentage); // 30% es el tamaño mínimo

//       document.documentElement.style.setProperty('--scroll-thumb-size', `${thumbHeight}%`);
//     };

//     window.addEventListener('scroll', updateScrollbar);
//     return () => window.removeEventListener('scroll', updateScrollbar);
//   }, []);

//   return null;
// };

// export default ScrollbarUpdater;

